from flask import Flask, render_template

app = Flask(__name__)

@app.route("/forward_on", methods=["POST"])
def f_on():
    print("On")
    return "ok"

@app.route("/forward_off", methods=["POST"])
def f_off():
    print("Off")
    return "ok"

@app.route("/back_on", methods=["POST"])
def b_on():
    print("On")
    return "ok"

@app.route("/back_off", methods=["POST"])
def b_off():
    print("Off")
    return "ok"

@app.route("/right_on", methods=["POST"])
def r_on():
    print("On")
    return "ok"

@app.route("/right_off", methods=["POST"])
def r_off():
    print("Off")
    return "ok"

@app.route("/left_on", methods=["POST"])
def l_on():
    print("On")
    return "ok"

@app.route("/left_off", methods=["POST"])
def l_off():
    print("Off")
    return "ok"

@app.route("/", methods=["GET"])
def home():
    return render_template("Car.html", title="Car controller")