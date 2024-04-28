from jinja2 import Environment, FileSystemLoader
from flask import Flask, request, url_for

environment = Environment(loader=FileSystemLoader("templates/"))
app = Flask(__name__)

def url_get(route_name):
    with app.app_context():
        return url_for(route_name)
environment.filters["url_get"] = url_get
environment.filters["url_for"] = url_for

index = environment.get_template("index.html")
hometemp = environment.get_template("home.html")

context={
    "name":"",
    #"tiltlogowhitebackground":r"E:programming projects/TILT/images/TILT_logo.png",
    #"stylesheet": url_get("templates/static/styles/betterstyle.css"),
    #"scriptfile": url_for("templates/static/scripts/betterscript.js"),
    #"home": url_for("templates/home.html"),
    #"index": url_for("templates/index.html")
}

@app.route(r"/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        name = request.form.get("name")
        context["name"] == name
    return index.render(context)

@app.route(r"/home")
def multiple():
    return hometemp.render(context)

if __name__ == "__main__":
    app.run("0.0.0.0", 1040, True) #change debug to false when in use
