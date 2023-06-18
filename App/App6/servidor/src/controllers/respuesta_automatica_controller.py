from flask import jsonify, request
from models.respuesta_automatica import RespuestaAutomatica, RespuestaAutomaticaSchema
from dao.db import db

respuesta_automatica_schema = RespuestaAutomaticaSchema()
respuestas_automaticas_schema = RespuestaAutomaticaSchema(many=True)

class RespuestaAutomatica_controller:
    """Clase que almacena los métodos controladores para las peticiones relacionadas con la entidad RespuestaAutomatica"""

    def get_respuestas_automaticas_by_bot(bot_id):
        """Obtiene las respuestas automáticas asociadas a un bot específico"""
        respuestas_automaticas = RespuestaAutomatica.query.filter_by(bot_id=bot_id).all()
        resultados = respuestas_automaticas_schema.dump(respuestas_automaticas)
        return jsonify(resultados)

    def add_respuesta_automatica():
        """Añade una respuesta automática a la BBDD con los atributos que llegan en la petición POST."""
        try:
            bot_id = request.json['bot_id']
            plantilla_id = request.json['plantilla_id']
            palabra_clave_id = request.json['palabra_clave_id']

            nueva_respuesta_automatica = RespuestaAutomatica(bot_id, plantilla_id, palabra_clave_id)
            db.session.add(nueva_respuesta_automatica)
            db.session.commit()

            return respuesta_automatica_schema.jsonify(nueva_respuesta_automatica)
        except:
            return jsonify({"Error": "Could not create respuesta automática"})

    def get_respuesta_automatica(respuesta_id):
        """Devuelve una respuesta automática dado su respuesta_id"""
        respuesta_automatica = RespuestaAutomatica.query.get(respuesta_id)
        return respuesta_automatica_schema.jsonify(respuesta_automatica)

    def update_respuesta_automatica(respuesta_id):
        """Modifica una respuesta automática con los atributos que llegan en la petición"""
        respuesta_automatica = RespuestaAutomatica.query.get(respuesta_id)

        if respuesta_automatica is not None:
            respuesta_automatica.plantilla_id = request.json['plantilla_id']
            respuesta_automatica.palabra_clave_id = request.json['palabra_clave_id']

            db.session.commit()

        return respuesta_automatica_schema.jsonify(respuesta_automatica)

    def delete_respuesta_automatica(respuesta_id):
        """Elimina una respuesta automática de la base de datos si existe"""
        respuesta_automatica = RespuestaAutomatica.query.get(respuesta_id)

        if respuesta_automatica is not None:
            db.session.delete(respuesta_automatica)
            db.session.commit()

        return respuesta_automatica_schema.jsonify(respuesta_automatica)
