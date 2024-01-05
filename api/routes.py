from flask import Blueprint

api= Blueprint("api",__name__,url_prefix="/api")

@api.route("/")
def hello_world():
    return "<p>Hello, World!</p>"