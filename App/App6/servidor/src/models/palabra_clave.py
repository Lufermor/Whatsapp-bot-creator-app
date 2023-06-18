from dao.db import db, ma

class PalabraClave(db.Model):
    """Clase que representa una palabra clave y la vincula con una tabla en la BBDD"""
    __tablename__ = "palabras_clave"
    palabra_clave_id = db.Column(db.Integer, primary_key=True)
    bot_id = db.Column(db.Integer, db.ForeignKey('bots.bot_id'), nullable=False)
    palabra_clave = db.Column(db.String(100), nullable=False)

    def __init__(self, bot_id, palabra_clave):
        """Crea una nueva instancia de la clase PalabraClave con los atributos indicados"""
        self.bot_id = bot_id
        self.palabra_clave = palabra_clave

class PalabraClaveSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos PalabraClave con Marshmallow"""
    class Meta:
        """Atributos de la entidad PalabraClave que se mostrarán (serializarán)"""
        fields = ("palabra_clave_id", "bot_id", "palabra_clave")
