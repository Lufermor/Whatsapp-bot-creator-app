from controllers.spec_controller import specs;


def specs_register_routes(app):
    """Define las rutas registradas para las especificaciones"""
    # Especificaciones:
    app.route("/api/docs", methods=['GET'])(lambda: specs(app))  
    #def spec(): return jsonify(swagger(app))