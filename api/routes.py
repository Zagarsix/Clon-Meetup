from flask import Blueprint
from flask import request
from flask import jsonify
import datetime

from models import User
from models import Event
from models import Meetup
from models import db

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api= Blueprint("api",__name__,url_prefix="/api")

# Por defecto viene con el método GET
@api.route("/") 
def root():
    return jsonify ({"msg": "Welcome to my Clon of Meetup"}), 200

## REGISTRO DE USUARIOS
@api.route("/register", methods=["POST"])
def register():
    try:
        body = request.get_json()
        # si alguno de estas variables no está
        if not "name" in body or not "lastname" in body or not "username" in body or not "email" in body or not "password" in body:    
            return "Ha ocurrido un error"

        # si alguno de estos campos está vacío
        if body["name"] == "" or body["lastname"] == "" or body["username"] == "" or body["email"] == "" or body["password"] == "":
            return jsonify({"msg":"Este campo es obligatorio"}), 400
        
        # si el usuario ya existe:
        userFound = User.query.filter_by(email=body["email"]).first()
        if userFound:
            return jsonify({"msg":"El usuario ya existe"}), 400 

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
        return jsonify({"msg":"Registrado exitosamente!"}), 200

    except Exception as error:
        print(error)
        return "Ha ocurrido un error al registrarse!"

## ME MUESTRA TODOS LOS USUARIOS DE MI BASE DE DATOS
@api.route("/users", methods=["GET"])
def users():
    users = User.query.all() #Para solicitar todos los usuarios
    serialize = list(map(lambda user: user.serialize(), users))
    print(users)
    return jsonify(serialize)


## INICIO DE SESIÓN
@api.route("/login", methods=["POST"])
def login():
    try:
        body = request.get_json()

        if not "email" in body or not "password" in body:
            return "Ha ocurrido un error"

        if body["email"] == "" or body["password"] == "":
            return jsonify({"msg":"Este campo es obligatorio"}), 400 
       
        #chequea si el usuario existe. Lo filtra a través del email y el password (deben coincidir)
        userExists = User.query.filter_by(email = body["email"], password = body["password"]).first()

        # si el usuario no existe, o ingresa mal alguno de los campos
        if not userExists:
            return jsonify({"msg":"Email y/o contraseña incorrecta"}), 401

        # Fecha de exporación del token
        expires = datetime.timedelta(days=1)

        # Creación del token de acceso
        token = create_access_token(identity=userExists.id, expires_delta= expires)
        
        data = {
            "token": token,
            "user": userExists.serialize()
        }

        print (body)
        return jsonify({"msg":"Inicio de sesión exitoso!","data": data}), 200

    except Exception as error:
        print (error)
        return "Ha ocurrido un error en la base de datos"    

     
## PARA AGREGAR EVENTOS
@api.route("/create_events", methods=["POST"])
def create_events():

    try:
        body = request.get_json()
        # si alguno de estas variables no está
        if not "tittle" in body or not "content" in body or not "day" in body or not "time" in body or not "meetups" in body or not "image" in body:    
            return "Ha ocurrido un error"

        # si alguno de estos campos está vacío
        if body["tittle"] == "" or body["content"] == "" or body["day"] == "" or body["time"] == "" or body["meetups"] == "":
            return jsonify({"msg":"Este campo es obligatorio"}), 400

        event = Event()
        event.tittle = body["tittle"]
        event.content = body["content"]
        event.day = body["day"]
        event.time = body["time"]
        event.meetups = body["meetups"]
        event.image = body["image"]

        db.session.add(event)
        db.session.commit()

        print (body)
        return jsonify({"msg":"Excelente! Tu evento ha sido creado!","data": data}), 200

    except Exception as error:
        print(error)
        return "Ha ocurrido un error para crear el evento"

# ME MUESTRA TODOS LOS EVENTOS DE MI BD
@api.route("/events", methods=["GET"])
def events():
    events = Event.query.all() #Para solicitar todos los eventos
    serialize = list(map(lambda event: event.serialize(), events))
    print(events)
    return jsonify(serialize)
   

## PARA AGREGAR MEETUPS
@api.route("/create_meetups", methods=["POST"])
def create_meetups():

    try:
        body = request.get_json()
        # si alguno de estas variables no está
        if not "name" in body or not "description" in body or not "image" in body:    
            return "Ha ocurrido un error"

        # si alguno de estos campos está vacío
        if body["name"] == "" or body["description"] == "":
            return jsonify({"msg":"Este campo es obligatorio"}), 400

        meetup = Meetup()
        meetup.name = body["name"]
        meetup.description = body["description"]
        meetup.image = body["image"]

        db.session.add(meetup)
        db.session.commit()

        print (body)
        return jsonify({"msg":"Tu meetup ha sido creado exitosamente!","data": data}), 200

    except Exception as error:
        print(error)
        return "Ha ocurrido un error al crear el Meetup"

# ME MUESTRA TODOS LOS MEETUPS DE MI BD
@api.route("/meetups", methods=["GET"])
def meetups():
    meetups = Meetup.query.all() #Para solicitar todos los meetups
    serialize = list(map(lambda meetup: meetup.serialize(), meetups))
    print(meetups)
    return jsonify(serialize)


