from flask import Blueprint
from flask import request
from flask import jsonify
from models import User
from models import db

api= Blueprint("api",__name__,url_prefix="/api")

# Por defecto viene con el método GET
@api.route("/") 
def hello_world():
    return "<p>Hello, World!</p>"

@api.route("/register", methods=["POST"])
def register():
    body = request.get_json()
    #instanciar una clase (crea un nuevo objeto):
    user = User()
    user.name = body["name"]
    user.lastname = body["lastname"]
    user.username = body["username"]
    user.email = body["email"]
    user.password = body["password"]
    #le decimos que agregue a la base de datos la variable:
    db.session.add(user)
    db.session.commit()
    
    print (body)
    return jsonify(body)


