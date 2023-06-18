from controllers.user_controller import User_controller

def users_register_routes(app):
    """Define las rutas registradas para los usuarios"""
    # Rutas de usuarios
    app.route("/users", methods=['GET'])(User_controller.get_users)
    app.route("/users", methods=['POST'])(User_controller.add_user)
    app.route("/users/<user_id>", methods=['GET'])(User_controller.get_user)
    app.route("/users/<user_id>", methods=['PUT'])(User_controller.update_user)
    app.route("/users/<user_id>", methods=['DELETE'])(User_controller.delete_user)
