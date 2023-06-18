from controllers.mensaje_controller import Mensaje_controller
from ...scripts.Envia_Whatsapps.bot_de_respuestas_2 import bot

def mensajes_register_routes(app):
    """Define las rutas registradas para los mensajes"""
    # Rutas de mensajes
    app.route("/bot", methods=['POST'])(bot)