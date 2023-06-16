
from controllers.article_controller import Article_controller;


def articles_register_routes(app):
    """Define las rutas registradas para la aplicación"""
    # Home
    app.route("/", methods=['GET'])(Article_controller.hello_world)

    # Rutas article
    app.route("/articles", methods=['GET'])(Article_controller.get_articles)
    app.route("/articles", methods=['POST'])(Article_controller.add_article)
    app.route("/articles/<id>", methods=['GET'])(Article_controller.article_details)
    app.route("/articles/<id>", methods=['PUT'])(Article_controller.update_article)
    app.route("/articles/<id>", methods=['DELETE'])(Article_controller.delete_article)
    app.route("/articles/count", methods=['GET'])(Article_controller.get_articles_count)
    app.route("/articles/get-by-title/<title>", methods=['GET'])(Article_controller.get__article_by_title)

