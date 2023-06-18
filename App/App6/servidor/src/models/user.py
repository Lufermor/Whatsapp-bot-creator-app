from dao.db import db, ma
import datetime

class User(db.Model):
    """Clase que representa a un usuario y lo vincula con una tabla en la BBDD"""
    __tablename__ = "usuarios"
    usuario_id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    correo = db.Column(db.String(100), unique=True)
    contrasena = db.Column(db.String(100))
    telefono = db.Column(db.String(30))
    fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, nombre, correo, telefono):
        """Crea una nueva instancia de la clase User con los atributos indicados"""
        self.nombre = nombre
        self.correo = correo
        self.telefono = telefono

class UserSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos User con Marshmallow"""
    class Meta:
        """Atributos de la entidad User que se mostrarán (serializarán)"""
        fields = ("usuario_id", "nombre", "correo", "telefono", "fecha_creacion")

