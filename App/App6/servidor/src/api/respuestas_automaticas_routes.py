from controllers.respuesta_automatica_controller import RespuestaAutomatica_controller

def respuestas_automaticas_register_routes(app):
    """Define las rutas registradas para las respuestas automáticas"""
    # Rutas de respuestas automáticas
    app.route("/respuestas_automaticas/bot/<bot_id>", methods=['GET'])(RespuestaAutomatica_controller.get_respuestas_automaticas_by_bot)
    app.route("/respuestas_automaticas", methods=['POST'])(RespuestaAutomatica_controller.add_respuesta_automatica)
    app.route("/respuestas_automaticas/<respuesta_id>", methods=['GET'])(RespuestaAutomatica_controller.get_respuesta_automatica)
    app.route("/respuestas_automaticas/<respuesta_id>", methods=['PUT'])(RespuestaAutomatica_controller.update_respuesta_automatica)
    app.route("/respuestas_automaticas/<respuesta_id>", methods=['DELETE'])(RespuestaAutomatica_controller.delete_respuesta_automatica)
