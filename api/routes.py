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
    try:
        body = request.get_json()
        if not "name" in body or not "lastname" in body or not "username" in body or not "email" in body or not "password" in body:    
            return "Ha ocurrido un error"
        if body["name"] == "" or body["lastname"] == "" or body["username"] == "" or body["email"] == "" or body["password"] == "":
            return "Este campo es obligatorio"
        
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
    except Exception as error:
        print(error)
        return "Ha ocurrido un error en la base de datos"


@api.route("/users", methods=["GET"])
def users():
    users = User.query.all() #Para solicitar todos los usuarios
    serialize = list(map(lambda user: user.serialize(), users))
    print(users)
    return jsonify(serialize)

@api.route("/login", methods=["POST"])
def login():
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

@api.route("/events", methods=["POST"])
def Event():
    body = request.get_json()

    event = events()
    event.tittle = body["tittle"]
    event.content = body["content"]
    event.day = body["day"]
    event.time = body["time"]
    event.meetups = body["meetups"]
    event.image = body["image"]

    db.session.add(event)
    db.session.commit()

    print (body)
    return jsonify(body)

