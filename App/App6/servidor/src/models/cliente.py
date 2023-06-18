from dao.db import db, ma
import datetime

class Cliente(db.Model):
    """Clase que representa a un cliente y lo vincula con una tabla en la BBDD"""
    __tablename__ = "clientes"
    cliente_id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.usuario_id'), nullable=False)
    nombre = db.Column(db.String(100))
    telefono = db.Column(db.String(100), nullable=False)
    fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, usuario_id, nombre, telefono):
        """Crea una nueva instancia de la clase Cliente con los atributos indicados"""
        self.usuario_id = usuario_id
        self.nombre = nombre
        self.telefono = telefono

class ClienteSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos Cliente con Marshmallow"""
    class Meta:
        """Atributos de la entidad Cliente que se mostrarán (serializarán)"""
        fields = ("cliente_id", "usuario_id", "nombre", "telefono", "fecha_creacion")
