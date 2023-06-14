
from controllers.article_controller import Article_controller;


def articles_register_routes(app):
    """Define las rutas registradas para la aplicación"""
    # Home
    app.route("/", methods=['GET'])(Article_controller.hello_world)

    # Rutas article
    app.route("/list_articles", methods=['GET'])(Article_controller.list_articles)
    app.route("/add_article", methods=['POST'])(Article_controller.add_article)
    app.route("/article_details/<id>", methods=['GET'])(Article_controller.article_details)
    app.route("/article_update/<id>", methods=['PUT'])(Article_controller.article_update)
    app.route("/article_delete/<id>", methods=['DELETE'])(Article_controller.article_delete)

    # Especificaciones:
    # app.route("/api/docs", methods=['GET'])(lambda: specs(app))  
    # def spec(): return jsonify(swagger(app))
