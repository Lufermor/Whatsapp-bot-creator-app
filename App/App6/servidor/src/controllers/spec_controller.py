from flask import jsonify;
from flask_swagger import swagger

from dao.db import db;

def specs(app):
    """Establece la documentación con ayuda de swagger"""
    swag = swagger(app)
    swag['info']['version'] = "1.0"
    swag['info']['title'] = "ChatFlow API Documentation"
    return jsonify(swag)