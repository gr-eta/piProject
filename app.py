from flask import Flask, render_template

app = Flask(__name__)

@app.route("/forward_on", methods=["POST"])
def forward():
    return "ok"

@app.route("/reverse_on", methods=["POST"])
def reverse():
    return "ok"

@app.route("/left_on", methods=["POST"])
def left():
    return "ok"

@app.route("/right_on", methods=["POST"])
def right():
    return "ok"

@app.route("/led_on", methods=["POST"])
@app.route("/", methods=["GET"])
def home():
    return render_template("main.html", title="Button", name="Prof. Eddy")