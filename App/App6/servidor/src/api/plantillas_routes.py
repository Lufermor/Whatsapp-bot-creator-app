from controllers.plantilla_controller import Plantilla_controller

def plantillas_register_routes(app):
    """Define las rutas registradas para las plantillas"""
    # Rutas de plantillas
    app.route("/plantillas/bot/<bot_id>", methods=['GET'])(Plantilla_controller.get_plantillas_by_bot)
    app.route("/plantillas", methods=['POST'])(Plantilla_controller.add_plantilla)
    app.route("/plantillas/<plantilla_id>", methods=['GET'])(Plantilla_controller.get_plantilla)
    app.route("/plantillas/<plantilla_id>", methods=['PUT'])(Plantilla_controller.update_plantilla)
    app.route("/plantillas/<plantilla_id>", methods=['DELETE'])(Plantilla_controller.delete_plantilla)
