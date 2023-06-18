from scripts.Envia_Whatsapps.bot_de_respuestas_2 import bot

def active_bot_routes(app):
    """Define las rutas registradas para los bots activos."""
    # Rutas de bots activos
    app.route("/bot", methods=['POST'])(bot)