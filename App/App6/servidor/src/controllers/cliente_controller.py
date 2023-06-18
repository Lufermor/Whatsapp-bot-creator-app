from flask import jsonify, request
from models.cliente import Cliente, ClienteSchema
from dao.db import db

cliente_schema = ClienteSchema()
clientes_schema = ClienteSchema(many=True)

class Cliente_controller:
    """Clase que almacena los métodos controladores para las peticiones relacionadas con la entidad Cliente"""

    def get_clientes_by_user(user_id):
        """Obtiene los clientes asociados a un usuario específico"""
        clientes = Cliente.query.filter_by(usuario_id=user_id).all()
        resultados = clientes_schema.dump(clientes)
        return jsonify(resultados)

    def add_cliente():
        """Añade un cliente a la BBDD con los atributos que llegan en la petición POST."""
        try:
            usuario_id = request.json['usuario_id']
            nombre = request.json['nombre']
            telefono = request.json['telefono']

            nuevo_cliente = Cliente(usuario_id, nombre, telefono)
            db.session.add(nuevo_cliente)
            db.session.commit()

            return cliente_schema.jsonify(nuevo_cliente)
        except:
            return jsonify({"Error": "Could not create cliente"})

    def get_cliente(cliente_id):
        """Devuelve un cliente dado su cliente_id"""
        cliente = Cliente.query.get(cliente_id)
        return cliente_schema.jsonify(cliente)

    def update_cliente(cliente_id):
        """Modifica un cliente con los atributos que llegan en la petición"""
        cliente = Cliente.query.get(cliente_id)

        if cliente is not None:
            cliente.nombre = request.json['nombre']
            cliente.telefono = request.json['telefono']

            db.session.commit()

        return cliente_schema.jsonify(cliente)

    def delete_cliente(cliente_id):
        """Elimina un cliente de la base de datos si existe"""
        cliente = Cliente.query.get(cliente_id)

        if cliente is not None:
            db.session.delete(cliente)
            db.session.commit()

        return cliente_schema.jsonify(cliente)
