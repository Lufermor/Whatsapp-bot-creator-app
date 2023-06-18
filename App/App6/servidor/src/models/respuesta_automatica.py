from dao.db import db, ma

class RespuestaAutomatica(db.Model):
    """Clase que representa una respuesta automática y la vincula con una tabla en la BBDD"""
    __tablename__ = "respuestas_automaticas"
    respuesta_id = db.Column(db.Integer, primary_key=True)
    bot_id = db.Column(db.Integer, db.ForeignKey('bots.bot_id'), nullable=False)
    plantilla_id = db.Column(db.Integer, db.ForeignKey('plantillas.plantilla_id'), nullable=False)
    palabra_clave_id = db.Column(db.Integer, db.ForeignKey('palabras_clave.palabra_clave_id'), nullable=False)

    def __init__(self, bot_id, plantilla_id, palabra_clave_id):
        """Crea una nueva instancia de la clase RespuestaAutomatica con los atributos indicados"""
        self.bot_id = bot_id
        self.plantilla_id = plantilla_id
        self.palabra_clave_id = palabra_clave_id

class RespuestaAutomaticaSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos RespuestaAutomatica con Marshmallow"""
    class Meta:
        """Atributos de la entidad RespuestaAutomatica que se mostrarán (serializarán)"""
        fields = ("respuesta_id", "bot_id", "plantilla_id", "palabra_clave_id")
