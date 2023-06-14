from flask import jsonify, request
from models.article import Article, ArticleSchema;
from dao.db import db;

# Creación del objeto esquema. Este objeto se usa cada vez que queremos serializar un artículo
article_schema = ArticleSchema()
# Creación del objeto esquema para varios artículos (por ejemplo cuando queremos listar todos los artículos)
articles_schema = ArticleSchema(many = True)

class Article_controller:
    """Clase que almacena los métodos controladores para las 
        peticiones relacionadas con la entidad Article"""
    
    def hello_world():
        """Returns a dict containing hello world"""
        return jsonify({"Hello": "world"})
        #return "<p>Hello, World!</p>"

    def list_articles():
        """Lista todos los artículos de la base de datos y los devuelve 
            formateados con ayuda de la clase ArticleSchema"""
        all_articles = Article.query.all()
        results = articles_schema.dump(all_articles)
        return jsonify(results)

    def add_article():
        """Añade un artículo a la BBDD con el title y body 
            que llegan en la petición POST."""
        
        try:
            title = request.json['title']
            body = request.json['body']

            article = Article(title, body)
            db.session.add(article)
            db.session.commit()

            return article_schema.jsonify(article)
        except:
            return jsonify({"Error": "Could not create article"})

    def article_details(id):
        """Devuelve un artículo del que se pasa su id"""
        article = Article.query.get(id)
        return article_schema.jsonify(article)

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

    def article_delete(id):
        """Elimina un artículo de la base de datos si existe"""
        article = Article.query.get(id)

        if article is not None:
            db.session.delete(article)
            db.session.commit()
        
        return article_schema.jsonify(article)
    
    @staticmethod
    def get__article_by_title(title):
        """Obtiene un artículo por su título"""
        return Article.query.filter_by(title=title).first()
    
    def get_articles_number():
        """Obtiene el número de artículos en la BBDD"""
        return Article.query.all().count()  # Creo que esto sí funciona
        # Según se ha leído, .count() es lento en mysql, así que la siguiente expresión 
        #   Es una alternativa más rápida.
        # return db.session.execute(Article.query.filter_by(condition).statement.with_only_columns([func.count()]).order_by(None)).scalar()
        # otra alternativa:
        # from sqlalchemy.sql.functions import func
        # number = session.query(func.count(table.id).label('number').first().number
        # Equivale a -> Select count(table.id) as number from table <- en mysql
