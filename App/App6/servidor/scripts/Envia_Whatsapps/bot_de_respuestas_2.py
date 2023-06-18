from flask import request
from twilio.twiml.messaging_response import MessagingResponse

def bot():
    """Recibe un mensaje desde twilio, comprueba la palabra clave y envía un mensaje de respuesta"""
    print(request)
    print(request.values)
    incoming_msg = request.values.get('Body', '').lower()
    resp = MessagingResponse()
    print(resp)
    msg = resp.message()
    print(msg)
    responded = False
    if 'hola' in incoming_msg:
        msg.body('¡Hola! ¿Cómo puedo ayudarte hoy?')
        responded = True
    if not responded:
        msg.body('Lo siento, no entiendo tu mensaje.')
    return str(resp)

