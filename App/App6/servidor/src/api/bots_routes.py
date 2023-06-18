from controllers.bot_controller import Bot_controller

def bots_register_routes(app):
    """Define las rutas registradas para los bots"""
    # Rutas de bots
    app.route("/bots/<user_id>", methods=['GET'])(Bot_controller.get_bots)
    app.route("/bots", methods=['POST'])(Bot_controller.add_bot)
    app.route("/bots/bot/<bot_id>", methods=['GET'])(Bot_controller.get_bot)
    app.route("/bots/<bot_id>", methods=['PUT'])(Bot_controller.update_bot)
    app.route("/bots/<bot_id>", methods=['DELETE'])(Bot_controller.delete_bot)
