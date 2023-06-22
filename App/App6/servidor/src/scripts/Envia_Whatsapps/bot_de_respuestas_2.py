from flask import request
from twilio.twiml.messaging_response import MessagingResponse

from models.user import User
from models.bot import Bot
from models.cliente import Cliente
from models.mensaje import Mensaje
from models.palabra_clave import PalabraClave
from models.respuesta_automatica import RespuestaAutomatica
from models.plantilla import Plantilla

from dao.db import db

def bot():
    """Recibe un mensaje desde Twilio, comprueba la palabra clave y envía un mensaje de respuesta"""
    incoming_msg = request.values.get('Body', '').lower()
    from_phone_number = request.values.get('From').split('+')[1]
    to_phone_number = request.values.get('To').split('+')[1]
    bot_activo = ""
    plantilla = ""
    print(request.values)
    
    resp = MessagingResponse()
    msg = resp.message()
    responded = False
    
    # Buscar al usuario por el número de teléfono
    usuario = User.query.filter_by(telefono=to_phone_number).first()
    
    if usuario:
        # Buscar un bot activo para el usuario
        bot_activo = Bot.query.filter_by(usuario_id=usuario.usuario_id, activo=True).first()
        
        if bot_activo:
            # Guardar el cliente si no existe
            cliente = Cliente.query.filter_by(usuario_id=usuario.usuario_id, telefono=from_phone_number).first()
            if not cliente:
                cliente = Cliente(usuario_id=usuario.usuario_id, nombre=request.values.get('ProfileName'), telefono=from_phone_number)
                db.session.add(cliente)
                db.session.commit()
            
            # Guardar el mensaje
            mensaje = Mensaje(bot_id=bot_activo.bot_id, mensaje=incoming_msg, enviado_por_bot=False)
            db.session.add(mensaje)
            db.session.commit()
            
            # Buscar palabras clave y respuestas automáticas
            palabras_clave = PalabraClave.query.filter_by(bot_id=bot_activo.bot_id).all()
            
            for palabra_clave in palabras_clave:
                if palabra_clave.palabra_clave.lower() in incoming_msg:
                    respuesta_automatica = RespuestaAutomatica.query.filter_by(
                        bot_id=bot_activo.bot_id,
                        palabra_clave_id=palabra_clave.palabra_clave_id
                    ).first()

                    if respuesta_automatica:
                        plantilla = Plantilla.query.get(respuesta_automatica.plantilla_id)
                        msg.body(plantilla.contenido)
                        responded = True
                        mensaje = Mensaje(bot_id=bot_activo.bot_id, mensaje=plantilla.contenido, enviado_por_bot=True)
                        db.session.add(mensaje)
                        db.session.commit()
                        break
                
    # Verificar si se ha respondido
    if not responded and (not usuario or not bot_activo):
        # No se encontró usuario o no hay bot activo, no enviar respuesta
        return ''
    elif not responded:
        # No se encontró una respuesta automática, enviar mensaje predeterminado
        msg.body('Lo siento, no entiendo tu mensaje.')
        mensaje = Mensaje(bot_id=bot_activo.bot_id, mensaje='Lo siento, no entiendo tu mensaje.', enviado_por_bot=True)
        db.session.add(mensaje)
        db.session.commit()
    
    return str(resp)
