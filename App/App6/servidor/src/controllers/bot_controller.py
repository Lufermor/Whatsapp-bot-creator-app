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
            print(request.json)

            # Verificar si ya existe un bot con el mismo usuario_id y nombre
            existente = Bot.query.filter_by(usuario_id=usuario_id, nombre=nombre).first()
            if existente:
                return jsonify({"Error": "Ya existe un bot con el mismo usuario_id y nombre"})

            # Verificar el formato de las horas (HH:MM)
            hora_inicio_valida = validate_time_format(hora_inicio_actividad)
            hora_fin_valida = validate_time_format(hora_fin_actividad)
            # if not hora_inicio_valida or not hora_fin_valida:
            #     return jsonify({"Error": "El formato de las horas no es válido. Debe ser HH:MM:SS"})

            # Verificar el orden de las horas
            # if hora_inicio_actividad >= hora_fin_actividad:
            #     print("La hora de inicio de actividad debe ser menor que la hora de fin de actividad")
            #     return jsonify({"Error": "La hora de inicio de actividad debe ser menor que la hora de fin de actividad"})

            # Cambiar el valor 'activo' a los demás bots del mismo usuario
            otros_bots = Bot.query.filter_by(usuario_id=usuario_id).all()
            for bot in otros_bots:
                bot.activo = False

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

    def delete_bot(bot_id):
        """Elimina un bot de la base de datos si existe"""
        bot = Bot.query.get(bot_id)

        if bot is not None:
            db.session.delete(bot)
            db.session.commit()

        return bot_schema.jsonify(bot)
    
    def update_bot(bot_id):
        """Modifica un bot con los atributos que llegan en la petición"""
        bot = Bot.query.get(bot_id)
        print(bot_id)
        print(bot_schema.jsonify(bot))

        if bot is not None:
            bot.nombre = request.json['nombre']
            hora_inicio_actividad = request.json['hora_inicio_actividad']
            hora_fin_actividad = request.json['hora_fin_actividad']
            print(request.json)

            # Verificar si ya existe otro bot con el mismo usuario_id y nombre
            existente = Bot.query.filter(Bot.bot_id != bot_id, Bot.usuario_id == bot.usuario_id, Bot.nombre == bot.nombre).first()
            if existente:
                print("Ya existe otro bot con el mismo usuario_id y nombre")
                return jsonify({"Error": "Ya existe otro bot con el mismo usuario_id y nombre"})

            # Verificar el formato de las horas de inicio y fin
            # if not validate_time_format(hora_inicio_actividad) or not validate_time_format(hora_fin_actividad):
            #     print("El formato de las horas de inicio o fin no es válido")
            #     return jsonify({"Error": "El formato de las horas de inicio o fin no es válido"})

            # Verificar si la hora de inicio es menor que la hora de fin
            if hora_inicio_actividad >= hora_fin_actividad:
                print("La hora de inicio debe ser menor que la hora de fin")
                return jsonify({"Error": "La hora de inicio debe ser menor que la hora de fin"})

            # Cambiar el valor 'activo' a los demás bots del mismo usuario si se está activando este bot
            if bot.activo:
                otros_bots = Bot.query.filter(Bot.bot_id != bot_id, Bot.usuario_id == bot.usuario_id).all()
                for otro_bot in otros_bots:
                    otro_bot.activo = False

            bot.hora_inicio_actividad = hora_inicio_actividad
            bot.hora_fin_actividad = hora_fin_actividad
            print(bot_schema.jsonify(bot))

            try:
                db.session.commit()
                print("En el try")
            except Exception as e:
                print(e)
        else:
            print("bot is none")

        print(bot_schema.jsonify(bot))
        db.session.commit()
        return bot_schema.jsonify(bot)


