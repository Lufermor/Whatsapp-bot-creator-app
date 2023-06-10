from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

# Create an instance of Flask with argument being the name of the application’s module (__name__)
app = Flask(__name__)
# Create an instance of marshmallow and initialize it with the app
ma = Marshmallow(app)

# Database configuration                                username:password@hostname/database
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost/tfg_dam_app6"
# Esta línea no es obligatoria pero si no la ponemos salta un warning
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# Inicialización de la app con la extensión
db = SQLAlchemy(app)
#db.init_app(app)

class Article(db.Model):
    """Clase que representa a un artículo y lo vincula con una tabla en la BBDD"""
    __tablename__ = "articles"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text, nullable=False)
    date = db.Column(db.DateTime, default=datetime.datetime.now) # default is datetime.datetime.now

    def __init__(self,title, body):
        """Crea una nueva instancia de la clase Article con el title y body indicados"""
        self.title = title
        self.body = body

class ArticleSchema(ma.Schema):
    """Clase que define el esquema de salida de los objetos Article con marshmallow"""
    class Meta:
        """Atributos de la entidad User que se mostrarán (serializarán)"""
        fields = ("id", "title", "body", "date")

# Creación del objeto esquema. Este objeto se usa cada vez que queremos serializar un artículo
article_schema = ArticleSchema()
# Creación del objeto esquema para varios artículos (por ejemplo cuando queremos listar todos los artículos)
articles_schema = ArticleSchema(many = True)

# Mapping root call
@app.route("/", methods = ['GET'])
def hello_world():
    """Returns a dict containing hello world"""
    return jsonify({"Hello": "world"})
    #return "<p>Hello, World!</p>"

@app.route('/list_articles', methods=['GET'])
def list_articles():
    """Lista todos los artículos de la base de datos y los devuelve 
        formateados con ayuda de la clase ArticleSchema"""
    all_articles = Article.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

@app.route('/add_article', methods=['POST'])
def add_article():
    """Añade un artículo a la BBDD con el title y body 
        que llegan en la petición POST."""
    title = request.json['title']
    body = request.json['body']

    article = Article(title, body)
    db.session.add(article)
    db.session.commit()

    return article_schema.jsonify(article)

@app.route('/article_details/<id>', methods = ['GET'])
def article_details(id):
    """Devuelve un artículo del que se pasa su id"""
    article = Article.query.get(id)
    return article_schema.jsonify(article)

@app.route('/article_update/<id>', methods=['PUT'])
def article_update(id):
    """Modifica un artículo con los title y 
        body que le llegan en la petición"""
    article = Article.query.get(id)

    if article is not None:
        title = request.json['title']
        body = request.json['body']

        article.title = title
        article.body = body

        db.session.commit()
    return article_schema.jsonify(article)

@app.route('/article_delete/<id>', methods=['DELETE'])
def article_delete(id):
    """Elimina un artículo de la base de datos si existe"""
    article = Article.query.get(id)

    if article is not None:
        db.session.delete(article)
        db.session.commit()
    
    return article_schema.jsonify(article)

# App initialization with debug mode, this mode is only for development level
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
