from flask import jsonify, request
from models.bot import Bot, BotSchema
from dao.db import db

bot_schema = BotSchema()
bots_schema = BotSchema(many=True)

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
                return jsonify({"Error": "There is already a bot with this name"})

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
            bot.hora_inicio_actividad = request.json['hora_inicio_actividad']
            bot.hora_fin_actividad = request.json['hora_fin_actividad']

            db.session.commit()

        return bot_schema.jsonify(bot)
    
    def update_bot(bot_id):
        """Modifica un bot con los atributos que llegan en la petición"""
        bot = Bot.query.get(bot_id)

        if bot is not None:
            nombre = request.json['nombre']
            hora_inicio_actividad = request.json['hora_inicio_actividad']
            hora_fin_actividad = request.json['hora_fin_actividad']

            # Verificar si ya existe otro bot con el mismo usuario_id y nombre
            existente = Bot.query.filter(Bot.bot_id != bot_id, Bot.usuario_id == bot.usuario_id, Bot.nombre == nombre).first()
            if existente:
                return jsonify({"Error": "There is already a bot with this name"})

            bot.nombre = nombre
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
