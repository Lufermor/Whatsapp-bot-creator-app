from controllers.mensaje_controller import Mensaje_controller

def mensajes_register_routes(app):
    """Define las rutas registradas para los mensajes"""
    # Rutas de mensajes
    app.route("/mensajes/bot/<bot_id>", methods=['GET'])(Mensaje_controller.get_mensajes_by_bot)
    app.route("/mensajes", methods=['POST'])(Mensaje_controller.add_mensaje)
    app.route("/mensajes/<mensaje_id>", methods=['GET'])(Mensaje_controller.get_mensaje)
    app.route("/mensajes/<mensaje_id>", methods=['PUT'])(Mensaje_controller.update_mensaje)
    app.route("/mensajes/<mensaje_id>", methods=['DELETE'])(Mensaje_controller.delete_mensaje)
