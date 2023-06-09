from flask import Flask, jsonify, request
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
ma = Marshmallow(app)
CORS(app)

# Configuración de la base de datos                   username:password@hostname/database
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost/tfg_dam_1"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# inicialización de la app con la extensión
db = SQLAlchemy()
db.init_app(app)

class User(db.Model):
    """Clase que representa a un usuario y lo vincula con la BBDD"""
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self,name, email):
        """Crea una nueva instancia de la clase User con el name y email indicados"""
        self.name = name
        self.email = email

class UserSchema(ma.Schema):
    """Clase que define el formato de salida con marshmallow"""
    class Meta:
        """Atributos de la entidad User que se mostrarán"""
        fields = ("id", "name", "email", "date")

# Creamos instancias de la clase UserSchema
user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route("/")
def hello_world():
    """Devuelve al usuario un hello world con la petición barra"""
    return "<p>Hello, World!</p>"

@app.route('/listusers', methods=['GET'])
def listusers():
    """Lista todos los usuarios de la base de datos y los devuelve 
        formateados con ayuda de la clase UserSchema"""
    all_users = User.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)

@app.route('/userdetails/<id>', methods = ['GET'])
def userdetails(id):
    """Devuelve un usuario del que se pasa su id"""
    user = User.query.get(id)
    return user_schema.jsonify(user)

@app.route('/userupdate/<id>', methods=['PUT'])
def userupdate(id):
    """Modifica un usuario con los name y 
        email que le llegan en la petición"""
    user = User.query.get(id)

    if user is not None:
        name = request.json['name']
        email = request.json['email']

        user.name = name
        user.email = email

        db.session.commit()
    return user_schema.jsonify(user)

@app.route('/userdelete/<id>', methods=['DELETE'])
def userdelete(id):
    """Elimina un usuario de la base de datos si existe"""
    user = User.query.get(id)

    if user is not None:
        db.session.delete(user)
        db.session.commit()
    
    return user_schema.jsonify(user)

@app.route('/useradd', methods=['POST'])
def useradd():
    """Añade un usuario a la BBDD con el name y email 
        que llegan en la petición POST."""
    name = request.json['name']
    email = request.json['email']

    user = User(name, email)
    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user)


