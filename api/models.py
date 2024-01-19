from flask_sqlalchemy import SQLAlchemy

db= SQLAlchemy()
Column=db.Column
Integer=db.Integer
String=db.String
relationship=db.relationship
ForeignKey=db.ForeignKey

class User (db.Model):
    __tablename__="users"
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    lastname = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    is_active = Column(Boolean(), default=True)
    role_id = Column(Integer, ForeignKey('roles.id'), nullable=False)
    image = Column(String(255))

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'lastname': self.lastname, 
            'email': self.email,
            'is_active': self.is_active,
            'role_id': self.role_id,
            'role': self.role.name,
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
    tittle = Column(String(100))
    content = Column(String(255))
    day = Column(String(100))
    time = Column(String(100))
    Meetups = Column(String)
    image = Column(String(255))

    def serialize(self):
        return {
            'id': self.id,
            'tittle': self.id,
            'content': self.id,
            'day': self.id,
            'time': self.id,
            'meetups': self.id,
            'image': self.id,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Meetups (db.Model):
    __tablename__="user"
    id=Column(Integer, primary_key=True)
    name=Column(String(100))
    password=Column(String(255))

