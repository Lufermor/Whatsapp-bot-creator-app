import datetime

from dao.db import db, ma;

class Article(db.Model):
    """Clase que representa a un artículo y lo vincula con una tabla en la BBDD"""
    __tablename__ = "articles"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.datetime.now)  # default is datetime.datetime.now

    def __init__(self,title, body):
        """Crea una nueva instancia de la clase Article con el title y body indicados"""
        self.title = title
        self.body = body

class ArticleSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos Article con marshmallow"""
    class Meta:
        """Atributos de la entidad User que se mostrarán (serializarán)"""
        fields = ("id", "title", "body", "date")
