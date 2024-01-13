from flask_sqlalchemy import SQLAlchemy

db= SQLAlchemy()
Column=db.Column
Integer=db.Integer
String=db.String

class User (db.Model):
    __tablename__="user"
    id=Column(Integer, primary_key=True)
    name=Column(String(100))
    password=Column(String(255))

