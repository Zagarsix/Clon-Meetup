from flask_sqlalchemy import SQLAlchemy

db= SQLAlchemy()
Column=db.Column
Integer=db.Integer
String=db.String
relationship=db.relationship
ForeignKey=db.ForeignKey
Boolean=db.Boolean

class User (db.Model):
    __tablename__="users"
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    lastname = Column(String(100), nullable=False)
    username = Column(String(100), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    is_active = Column(Boolean(), default=True)
    meetups = relationship("Meetup")

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'username': self.username,
            'lastname': self.lastname, 
            'email': self.email,
            'is_active': self.is_active,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Meetup (db.Model):
    __tablename__="meetups"
    id = Column(Integer, primary_key=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(String(255))
    image = Column(String(255))
    events = relationship("Event")
    user_id = Column(Integer, ForeignKey("users.id"))

    def serialize(self):
        return{
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
        } 

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Event (db.Model):
    __tablename__="events"
    id = Column(Integer, primary_key=True)
    tittle = Column(String(100), nullable=False)
    content = Column(String(255))
    day = Column(String(100), nullable=False)
    time = Column(String(100), nullable=False)
    image = Column(String(255))
    meetups_id = Column(Integer, ForeignKey("meetups.id"))
    meetups = relationship("Meetup")

    def serialize(self):
        return {
            'id': self.id,
            'tittle': self.tittle,
            'content': self.content,
            'day': self.day,
            'time': self.time,
            'meetups_id': self.meetups_id,
            'image': self.image,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()