from dao.db import db, ma

class Plantilla(db.Model):
    """Clase que representa a una plantilla y la vincula con una tabla en la BBDD"""
    __tablename__ = "plantillas"
    plantilla_id = db.Column(db.Integer, primary_key=True)
    bot_id = db.Column(db.Integer, db.ForeignKey('bots.bot_id'), nullable=False)
    contenido = db.Column(db.Text, nullable=False)
    nombre = db.Column(db.String(100), nullable=False)

    def __init__(self, bot_id, contenido, nombre):
        """Crea una nueva instancia de la clase Plantilla con los atributos indicados"""
        self.bot_id = bot_id
        self.contenido = contenido
        self.nombre = nombre

class PlantillaSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos Plantilla con Marshmallow"""
    class Meta:
        """Atributos de la entidad Plantilla que se mostrarán (serializarán)"""
        fields = ("plantilla_id", "bot_id", "contenido", "nombre")
