from flask import Flask, render_template
from gpiozero import Robot
import time

app = Flask(__name__)
robot = Robot(left=(7,8), right=(9,10))

@app.route("/", methods=["GET"])
def home():
    return render_template("main.html", title="Button", name="Prof. Eddy")

@app.route("/forward", methods=["POST"])
def forward():
    robot.forward()
    time.sleep(1)
    robot.stop()
    return "ok"

@app.route("/reverse", methods=["POST"])
def reverse():
    robot.backward()
    time.sleep(1)
    robot.stop()
    return "ok"

@app.route("/left", methods=["POST"])
def left():
    return "ok"

@app.route("/right", methods=["POST"])
def right():
    return "ok"
