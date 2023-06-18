from dao.db import db, ma
import datetime

class Mensaje(db.Model):
    """Clase que representa a un mensaje y lo vincula con una tabla en la BBDD"""
    __tablename__ = "mensajes"
    mensaje_id = db.Column(db.Integer, primary_key=True)
    bot_id = db.Column(db.Integer, db.ForeignKey('bots.bot_id'), nullable=False)
    mensaje = db.Column(db.Text, nullable=False)
    enviado_por_bot = db.Column(db.Boolean, default=True)
    fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, bot_id, mensaje, enviado_por_bot):
        """Crea una nueva instancia de la clase Mensaje con los atributos indicados"""
        self.bot_id = bot_id
        self.mensaje = mensaje
        self.enviado_por_bot = enviado_por_bot

class MensajeSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos Mensaje con Marshmallow"""
    class Meta:
        """Atributos de la entidad Mensaje que se mostrarán (serializarán)"""
        fields = ("mensaje_id", "bot_id", "mensaje", "enviado_por_bot", "fecha_creacion")
