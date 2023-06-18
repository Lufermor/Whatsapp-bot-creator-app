from flask import jsonify, request
from models.programacion import Programacion, ProgramacionSchema
from dao.db import db

# Creación del objeto esquema. Este objeto se usa cada vez que queremos serializar una programación
programacion_schema = ProgramacionSchema()
# Creación del objeto esquema para varias programaciones (por ejemplo, al listar todas las programaciones)
programaciones_schema = ProgramacionSchema(many=True)

class Programacion_controller:
    """Clase que almacena los métodos controladores para las programaciones"""

    def get_programaciones_by_bot(bot_id):
        """Obtiene todas las programaciones de la base de datos y las devuelve en formato JSON"""
        all_programaciones = Programacion.query.filter_by(bot_id=bot_id).all()
        results = programaciones_schema.dump(all_programaciones)
        return jsonify(results)

    def add_programacion():
        """Añade una programación a la base de datos con los atributos que llegan en la petición POST"""
        try:
            bot_id = request.json['bot_id']
            hora_envio = request.json['hora_envio']
            mensaje_id = request.json['mensaje_id']
            destinatario_id = request.json['destinatario_id']

            programacion = Programacion(bot_id, hora_envio, mensaje_id, destinatario_id)

            db.session.add(programacion)
            db.session.commit()

            return programacion_schema.jsonify(programacion)
        except:
            return jsonify({"Error": "Could not create programacion"})

    def get_programacion(programacion_id):
        """Obtiene una programación según su ID y la devuelve en formato JSON"""
        programacion = Programacion.query.get(programacion_id)
        return programacion_schema.jsonify(programacion)

    def update_programacion(programacion_id):
        """Modifica una programación con los atributos que llegan en la petición PUT"""
        programacion = Programacion.query.get(programacion_id)

        if programacion is not None:
            bot_id = request.json['bot_id']
            hora_envio = request.json['hora_envio']
            mensaje_id = request.json['mensaje_id']
            destinatario_id = request.json['destinatario_id']

            programacion.bot_id = bot_id
            programacion.hora_envio = hora_envio
            programacion.mensaje_id = mensaje_id
            programacion.destinatario_id = destinatario_id

            db.session.commit()
        return programacion_schema.jsonify(programacion)

    def delete_programacion(programacion_id):
        """Elimina una programación de la base de datos si existe"""
        programacion = Programacion.query.get(programacion_id)

        if programacion is not None:
            db.session.delete(programacion)
            db.session.commit()

        return programacion_schema.jsonify(programacion)
