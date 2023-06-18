from dao.db import db, ma
import datetime

class Bot(db.Model):
    """Clase que representa a un bot y lo vincula con una tabla en la BBDD"""
    __tablename__ = "bots"
    bot_id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.usuario_id'), nullable=False)
    nombre = db.Column(db.String(100))
    activo = db.Column(db.Boolean, default=True)
    fecha_creacion = db.Column(db.DateTime, default=datetime.datetime.now)
    hora_inicio_actividad = db.Column(db.Time)
    hora_fin_actividad = db.Column(db.Time)

    def __init__(self, usuario_id, nombre, hora_inicio_actividad, hora_fin_actividad):
        """Crea una nueva instancia de la clase Bot con los atributos indicados"""
        self.usuario_id = usuario_id
        self.nombre = nombre
        self.hora_inicio_actividad = hora_inicio_actividad
        self.hora_fin_actividad = hora_fin_actividad

class BotSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos Bot con Marshmallow"""
    class Meta:
        """Atributos de la entidad Bot que se mostrarán (serializarán)"""
        fields = ("bot_id", "usuario_id", "nombre", "activo", "fecha_creacion", "hora_inicio_actividad", "hora_fin_actividad")
