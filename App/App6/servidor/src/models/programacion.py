from dao.db import db, ma
import datetime

class Programacion(db.Model):
    """Clase que representa una programación de mensajes y la vincula con una tabla en la BBDD"""
    __tablename__ = "programacion"
    programacion_id = db.Column(db.Integer, primary_key=True)
    bot_id = db.Column(db.Integer, db.ForeignKey('bots.bot_id'), nullable=False)
    hora_envio = db.Column(db.DateTime, default=datetime.datetime.now)
    mensaje_id = db.Column(db.Integer, db.ForeignKey('plantillas.plantilla_id'), nullable=False)
    destinatario_id = db.Column(db.Integer, db.ForeignKey('clientes.cliente_id'), nullable=False)

    def __init__(self, bot_id, hora_envio, mensaje_id, destinatario_id):
        """Crea una nueva instancia de la clase Programacion con los atributos indicados"""
        self.bot_id = bot_id
        self.hora_envio = hora_envio
        self.mensaje_id = mensaje_id
        self.destinatario_id = destinatario_id

class ProgramacionSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos Programacion con Marshmallow"""
    class Meta:
        """Atributos de la entidad Programacion que se mostrarán (serializarán)"""
        fields = ("programacion_id", "bot_id", "hora_envio", "mensaje_id", "destinatario_id")
