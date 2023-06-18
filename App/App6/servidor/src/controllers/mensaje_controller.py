from flask import jsonify, request
from models.mensaje import Mensaje, MensajeSchema
from dao.db import db

mensaje_schema = MensajeSchema()
mensajes_schema = MensajeSchema(many=True)

class Mensaje_controller:
    """Clase que almacena los métodos controladores para las peticiones relacionadas con la entidad Mensaje"""

    def get_mensajes_by_bot(bot_id):
        """Obtiene los mensajes asociados a un bot específico"""
        mensajes = Mensaje.query.filter_by(bot_id=bot_id).all()
        resultados = mensajes_schema.dump(mensajes)
        return jsonify(resultados)

    def add_mensaje():
        """Añade un mensaje a la BBDD con los atributos que llegan en la petición POST."""
        try:
            bot_id = request.json['bot_id']
            mensaje = request.json['mensaje']
            enviado_por_bot = request.json['enviado_por_bot']

            nuevo_mensaje = Mensaje(bot_id, mensaje, enviado_por_bot)
            db.session.add(nuevo_mensaje)
            db.session.commit()

            return mensaje_schema.jsonify(nuevo_mensaje)
        except:
            return jsonify({"Error": "Could not create mensaje"})

    def get_mensaje(mensaje_id):
        """Devuelve un mensaje dado su mensaje_id"""
        mensaje = Mensaje.query.get(mensaje_id)
        return mensaje_schema.jsonify(mensaje)

    def update_mensaje(mensaje_id):
        """Modifica un mensaje con los atributos que llegan en la petición"""
        mensaje = Mensaje.query.get(mensaje_id)

        if mensaje is not None:
            mensaje.mensaje = request.json['mensaje']
            mensaje.enviado_por_bot = request.json['enviado_por_bot']

            db.session.commit()

        return mensaje_schema.jsonify(mensaje)

    def delete_mensaje(mensaje_id):
        """Elimina un mensaje de la base de datos si existe"""
        mensaje = Mensaje.query.get(mensaje_id)

        if mensaje is not None:
            db.session.delete(mensaje)
            db.session.commit()

        return mensaje_schema.jsonify(mensaje)
