from flask import jsonify, request
from models.plantilla import Plantilla, PlantillaSchema
from dao.db import db

plantilla_schema = PlantillaSchema()
plantillas_schema = PlantillaSchema(many=True)

class Plantilla_controller:
    """Clase que almacena los métodos controladores para las peticiones relacionadas con la entidad Plantilla"""

    def get_plantillas_by_bot(bot_id):
        """Obtiene las plantillas asociadas a un bot específico"""
        plantillas = Plantilla.query.filter_by(bot_id=bot_id).all()
        resultados = plantillas_schema.dump(plantillas)
        return jsonify(resultados)
        
    def add_plantilla():
        """Añade una plantilla a la BBDD con los atributos que llegan en la petición POST."""
        try:
            bot_id = request.json['bot_id']
            contenido = request.json['contenido']
            nombre = request.json['nombre']

            # Verificar si ya existe una plantilla con el mismo bot_id y nombre
            existente = Plantilla.query.filter_by(bot_id=bot_id, nombre=nombre).first()
            if existente:
                return jsonify({"Error": "This template name already exists for this bot, choose a different template name"})

            nueva_plantilla = Plantilla(bot_id, contenido, nombre)
            db.session.add(nueva_plantilla)
            db.session.commit()

            return plantilla_schema.jsonify(nueva_plantilla)
        except:
            return jsonify({"Error": "Could not create plantilla"})


    def get_plantilla(plantilla_id):
        """Devuelve una plantilla dado su plantilla_id"""
        plantilla = Plantilla.query.get(plantilla_id)
        return plantilla_schema.jsonify(plantilla)

    def update_plantilla(plantilla_id):
        """Modifica una plantilla con los atributos que llegan en la petición"""
        plantilla = Plantilla.query.get(plantilla_id)

        if plantilla is not None:
            nuevo_contenido = request.json['contenido']
            nuevo_nombre = request.json['nombre']

            # Verificar si ya existe una plantilla con el mismo bot_id y nombre
            existente = Plantilla.query.filter(Plantilla.plantilla_id != plantilla_id, Plantilla.bot_id == plantilla.bot_id, Plantilla.nombre == nuevo_nombre).first()
            if existente:
                return jsonify({"Error": "This template name already exists for this bot, choose a different template name"})

            plantilla.contenido = nuevo_contenido
            plantilla.nombre = nuevo_nombre

            db.session.commit()

        return plantilla_schema.jsonify(plantilla)

    def delete_plantilla(plantilla_id):
        """Elimina una plantilla de la base de datos si existe"""
        plantilla = Plantilla.query.get(plantilla_id)

        if plantilla is not None:
            db.session.delete(plantilla)
            db.session.commit()

        return plantilla_schema.jsonify(plantilla)
