from flask import Flask
from routes import api
from models import db
from flask_migrate import Migrate

app = Flask(__name__)
app.register_blueprint(api)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)
Migrate(app, db)

# Código para que el servicio se actualice automáticamente, cuando hay cambios ó errores.
if __name__ == "__main__":
    app.run(debug=True)

# Luego se levanta el servicio con el comando $ python app.py (nombre de mi app)
# después de la línea Debugger PIN, en la terminal, se puede observar los nuevos usuarios. (cambios realizados)


