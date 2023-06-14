from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

# Create an instance of Flask with argument being the name of the application’s module (__name__)
"""app = Flask(__name__)"""
# Create an instance of marshmallow and initialize it with the app
ma = Marshmallow()
# Database configuration                                username:password@hostname/database
"""app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost/tfg_dam_app6"
# Esta línea no es obligatoria pero si no la ponemos salta un warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False"""
# Inicialización de la app con la extensión
db = SQLAlchemy()
# db.init_app(app)
