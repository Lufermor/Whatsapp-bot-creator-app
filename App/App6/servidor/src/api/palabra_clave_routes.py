from controllers.palabra_clave_controller import PalabraClave_controller

def palabras_clave_register_routes(app):
    """Define las rutas registradas para las palabras clave"""
    # Rutas de palabras clave
    app.route("/palabras_clave/bot/<bot_id>", methods=['GET'])(PalabraClave_controller.get_palabras_clave_by_bot)
    app.route("/palabras_clave", methods=['POST'])(PalabraClave_controller.add_palabra_clave)
    app.route("/palabras_clave/<palabra_clave_id>", methods=['GET'])(PalabraClave_controller.get_palabra_clave)
    app.route("/palabras_clave/<palabra_clave_id>", methods=['PUT'])(PalabraClave_controller.update_palabra_clave)
    app.route("/palabras_clave/<palabra_clave_id>", methods=['DELETE'])(PalabraClave_controller.delete_palabra_clave)
