from flask import Flask
from routes import api
from models import db
from flask_migrate import Migrate

app = Flask(__name__)
app.register_blueprint(api)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)
Migrate(app, db)


