from flask_swagger_ui import get_swaggerui_blueprint


from api.articles_routes import articles_register_routes;
from api.specs_routes import specs_register_routes;

class Config:
    # Database configuration               username:password@hostname/database
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:root@localhost/tfg_dam_app6"
    # Esta línea no es obligatoria pero si no la ponemos salta un warning, se recomienda así en la doc oficial
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # HOST = '192.168.1.136'  # Host Piso
    HOST = '192.168.10.29'  # Host bt3
    PORT = 3000
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