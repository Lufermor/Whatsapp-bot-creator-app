from flask import jsonify, request
from models.palabra_clave import PalabraClave, PalabraClaveSchema
from dao.db import db

palabra_clave_schema = PalabraClaveSchema()
palabras_clave_schema = PalabraClaveSchema(many=True)

class PalabraClave_controller:
    """Clase que almacena los métodos controladores para las peticiones relacionadas con la entidad PalabraClave"""

    def get_palabras_clave_by_bot(bot_id):
        """Obtiene las palabras clave asociadas a un bot específico"""
        palabras_clave = PalabraClave.query.filter_by(bot_id=bot_id).all()
        resultados = palabras_clave_schema.dump(palabras_clave)
        return jsonify(resultados)
        
    def add_palabra_clave():
        """Añade una palabra clave a la BBDD con los atributos que llegan en la petición POST."""
        try:
            bot_id = request.json['bot_id']
            palabra_clave = request.json['palabra_clave']

            # Verificar si ya existe una palabra clave con el mismo bot_id y palabra_clave
            existente = PalabraClave.query.filter_by(bot_id=bot_id, palabra_clave=palabra_clave).first()
            if existente:
                return jsonify({"Error": "This keyword already exists for this bot, choose a different keyword"})

            nueva_palabra_clave = PalabraClave(bot_id, palabra_clave)
            db.session.add(nueva_palabra_clave)
            db.session.commit()

            return palabra_clave_schema.jsonify(nueva_palabra_clave)
        except:
            return jsonify({"Error": "Could not create palabra clave"})


    def get_palabra_clave(palabra_clave_id):
        """Devuelve una palabra clave dado su palabra_clave_id"""
        palabra_clave = PalabraClave.query.get(palabra_clave_id)
        return palabra_clave_schema.jsonify(palabra_clave)
    
    def update_palabra_clave(palabra_clave_id):
        """Modifica una palabra clave con los atributos que llegan en la petición"""
        palabra_clave = PalabraClave.query.get(palabra_clave_id)

        if palabra_clave is not None:
            nueva_palabra_clave = request.json['palabra_clave']

            # Verificar si ya existe una palabra clave con el mismo bot_id y palabra_clave
            existente = PalabraClave.query.filter_by(bot_id=palabra_clave.bot_id, palabra_clave=nueva_palabra_clave).first()
            if existente:
                return jsonify({"Error": "This keyword already exists for this bot, choose a different keyword"})

            palabra_clave.palabra_clave = nueva_palabra_clave

            db.session.commit()

        return palabra_clave_schema.jsonify(palabra_clave)


    def delete_palabra_clave(palabra_clave_id):
        """Elimina una palabra clave de la base de datos si existe"""
        palabra_clave = PalabraClave.query.get(palabra_clave_id)

        if palabra_clave is not None:
            db.session.delete(palabra_clave)
            db.session.commit()

        return palabra_clave_schema.jsonify(palabra_clave)
