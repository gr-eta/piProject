from flask import Flask, render_template

app = Flask(__name__)

def forward():
    return "ok"
def reverse():
    return "ok"

def left():
    return "ok"

def right():
    return "ok"

@app.route("/", methods=["GET"])
def home():
    return render_template("main.html", title="Button", name="Prof. Eddy")