from flask import jsonify, request
import re


from models.bot import Bot, BotSchema
from dao.db import db

bot_schema = BotSchema()
bots_schema = BotSchema(many=True)


def validate_time_format(time_str):
    """valida que la hora que le llega cumple con un formato"""
    pattern = r'^([01]\d|2[0-3]):([0-5]\d)$'
    if re.match(pattern, time_str):
        return True
    else:
        return False

class Bot_controller:
    """Clase que almacena los métodos controladores para las peticiones relacionadas con la entidad Bot"""

    def get_bots(user_id):
        """Obtiene los bots del usuario activo"""
        all_bots = Bot.query.filter_by(usuario_id=user_id).all()
        results = bots_schema.dump(all_bots)
        return jsonify(results)

    def add_bot():
        """Añade un bot a la BBDD con los atributos que llegan en la petición POST."""
        try:
            usuario_id = request.json['usuario_id']
            nombre = request.json['nombre']
            hora_inicio_actividad = request.json['hora_inicio_actividad']
            hora_fin_actividad = request.json['hora_fin_actividad']

            # Verificar si ya existe un bot con el mismo usuario_id y nombre
            existente = Bot.query.filter_by(usuario_id=usuario_id, nombre=nombre).first()
            if existente:
                return jsonify({"Error": "Ya existe un bot con el mismo usuario_id y nombre"})

            # Verificar el formato de las horas (HH:MM:SS)
            # hora_inicio_valida = re.match(r'^\d{2}:\d{2}:\d{2}$', hora_inicio_actividad)
            # hora_fin_valida = re.match(r'^\d{2}:\d{2}:\d{2}$', hora_fin_actividad)
            # patrón para comprobar solo horas y minutos:
            # r'^([01]\d|2[0-3]):([0-5]\d)$'

            # tendremos que asegurarnos de en qué formato nos llegan las horas para poder 
            # comprobar de una manera u otra

            hora_inicio_valida = validate_time_format(hora_inicio_actividad)
            hora_fin_valida = validate_time_format(hora_fin_actividad)
            if not hora_inicio_valida or not hora_fin_valida:
                return jsonify({"Error": "El formato de las horas no es válido. Debe ser HH:MM:SS"})

            # Verificar el orden de las horas
            if hora_inicio_actividad >= hora_fin_actividad:
                return jsonify({"Error": "La hora de inicio de actividad debe ser menor que la hora de fin de actividad"})

            bot = Bot(usuario_id, nombre, hora_inicio_actividad, hora_fin_actividad)
            db.session.add(bot)
            db.session.commit()

            return bot_schema.jsonify(bot)
        except:
            return jsonify({"Error": "Could not create bot"})


    def get_bot(bot_id):
        """Devuelve un bot dado su bot_id"""
        bot = Bot.query.get(bot_id)
        return bot_schema.jsonify(bot)
    
    def update_bot(bot_id):
        """Modifica un bot con los atributos que llegan en la petición"""
        bot = Bot.query.get(bot_id)

        if bot is not None:
            bot.nombre = request.json['nombre']
            hora_inicio_actividad = request.json['hora_inicio_actividad']
            hora_fin_actividad = request.json['hora_fin_actividad']

            # Verificar si ya existe otro bot con el mismo usuario_id y nombre
            existente = Bot.query.filter(Bot.bot_id != bot_id, Bot.usuario_id == bot.usuario_id, Bot.nombre == nombre).first()
            if existente:
                return jsonify({"Error": "Ya existe otro bot con el mismo usuario_id y nombre"})

            # Verificar el formato de las horas de inicio y fin
            if not validate_time_format(hora_inicio_actividad) or not validate_time_format(hora_fin_actividad):
                return jsonify({"Error": "El formato de las horas de inicio o fin no es válido"})

            # Verificar si la hora de inicio es menor que la hora de fin
            if hora_inicio_actividad >= hora_fin_actividad:
                return jsonify({"Error": "La hora de inicio debe ser menor que la hora de fin"})

            bot.hora_inicio_actividad = hora_inicio_actividad
            bot.hora_fin_actividad = hora_fin_actividad

            db.session.commit()

        return bot_schema.jsonify(bot)

    def delete_bot(bot_id):
        """Elimina un bot de la base de datos si existe"""
        bot = Bot.query.get(bot_id)

        if bot is not None:
            db.session.delete(bot)
            db.session.commit()

        return bot_schema.jsonify(bot)
