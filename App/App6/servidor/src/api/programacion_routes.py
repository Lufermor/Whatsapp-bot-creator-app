from controllers.programacion_controller import Programacion_controller

def programacion_register_routes(app):
    """Define las rutas registradas para las programaciones"""
    # Rutas de programaciones
    app.route("/programaciones/bot/<bot_id>", methods=['GET'])(Programacion_controller.get_programaciones_by_bot)
    app.route("/programaciones", methods=['POST'])(Programacion_controller.add_programacion)
    app.route("/programaciones/<programacion_id>", methods=['GET'])(Programacion_controller.get_programacion)
    app.route("/programaciones/<programacion_id>", methods=['PUT'])(Programacion_controller.update_programacion)
    app.route("/programaciones/<programacion_id>", methods=['DELETE'])(Programacion_controller.delete_programacion)
