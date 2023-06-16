from flask_swagger_ui import get_swaggerui_blueprint

import os


from api.articles_routes import articles_register_routes;
from api.specs_routes import specs_register_routes;

class Config:
    # Database configuration               username:password@hostname/database
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
    # Esta línea no es obligatoria pero si no la ponemos salta un warning, se recomienda así en la doc oficial
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    HOST = os.getenv("HOST")  # Host Piso
    # HOST = os.getenv("NICKNAME")  # Host bt3
    PORT = os.getenv("PORT")
    DEBUG = True

    # Swagger config
    SWAGGER_URL = '/api/docs'
    # Call factory function to create our blueprint
    SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
        SWAGGER_URL,  # Swagger UI static files will be mapped to '{SWAGGER_URL}/dist/'
        '/static/swagger.json',  # '' + HOST + ':' + str(PORT),
        config={  # Swagger UI config overrides
            'app_name': "ChatFlow API",
        },
    )

directorios_rutas = [articles_register_routes, specs_register_routes]