from flask import jsonify, request
from models.user import User, UserSchema
from dao.db import db

# Creación del objeto esquema. Este objeto se usa cada vez que queremos serializar un usuario
user_schema = UserSchema()
# Creación del objeto esquema para varios usuarios (por ejemplo, cuando queremos listar todos los usuarios)
users_schema = UserSchema(many=True)


class User_controller:
    """Clase que almacena los métodos controladores para las peticiones relacionadas con la entidad User"""

    def get_users():
        """Lista todos los usuarios de la base de datos y los devuelve formateados con ayuda de la clase UserSchema"""
        all_users = User.query.all()
        results = users_schema.dump(all_users)
        return jsonify(results)

    def add_user():
        """Añade un usuario a la BBDD con los atributos que llegan en la petición POST."""
        try:
            email = request.json["email"]
            nombre = request.json["name"]
            telefono = request.json["id"]
            user = User(nombre, email, telefono)
            print(user_schema.jsonify(user))

            db.session.add(user)
            db.session.commit()

            return user_schema.jsonify(user)

        except:
            return jsonify({"Error": "Could not create user"})

    def get_user(user_id):
        """Devuelve un usuario dado su usuario_id"""
        user = User.query.get(user_id)
        return user_schema.jsonify(user)

    def update_user(user_id):
        """Modifica un usuario con los atributos que llegan en la petición"""
        user = User.query.get(user_id)

        if user is not None:
            user.nombre = request.json["nombre"]
            user.correo = request.json["correo"]
            user.contrasena = request.json["contrasena"]
            user.telefono = request.json["telefono"]

            db.session.commit()

        return user_schema.jsonify(user)

    def delete_user(user_id):
        """Elimina un usuario de la base de datos si existe"""
        user = User.query.get(user_id)

        if user is not None:
            db.session.delete(user)
            db.session.commit()

        return user_schema.jsonify(user)
