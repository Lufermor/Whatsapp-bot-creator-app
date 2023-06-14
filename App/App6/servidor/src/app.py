from flask import Flask;

from dao.db import db, ma;
from config import Config, directorios_rutas;

# Create an instance of Flask with argument being the name of the application’s module (__name__)
app = Flask(__name__)
app.config.from_object(Config)  

# API Routes config
for directorio in directorios_rutas:
    directorio(app)

# Swagger config
app.register_blueprint(Config.SWAGGERUI_BLUEPRINT, url_prefix=Config.SWAGGER_URL)

# App initialization with debug mode, this mode is only for development level
if __name__ == '__main__':
    with app.app_context():
        db.init_app(app)
        ma.init_app(app)
        db.create_all()
    # app.run(debug=True)
    # Tenemos uqe poner como host nuestra ipv4 porque sino recibiremos network request failed
    #app.run(host = Config.HOST, port= Config.PORT, debug=Config.DEBUG)
    app.run(host = '0.0.0.0', port= 3000, debug=True)
