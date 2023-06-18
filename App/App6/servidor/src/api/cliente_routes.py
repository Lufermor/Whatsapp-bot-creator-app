from controllers.cliente_controller import Cliente_controller

def clientes_register_routes(app):
    """Define las rutas registradas para los clientes"""
    # Rutas de clientes
    app.route("/clientes/user/<user_id>", methods=['GET'])(Cliente_controller.get_clientes_by_user)
    app.route("/clientes", methods=['POST'])(Cliente_controller.add_cliente)
    app.route("/clientes/<cliente_id>", methods=['GET'])(Cliente_controller.get_cliente)
    app.route("/clientes/<cliente_id>", methods=['PUT'])(Cliente_controller.update_cliente)
    app.route("/clientes/<cliente_id>", methods=['DELETE'])(Cliente_controller.delete_cliente)
