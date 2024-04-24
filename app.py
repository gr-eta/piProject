from flask import Flask, render_template
from gpiozero import Robot
import time

app = Flask(__name__)

robot = Robot(left=(9,10), right=(7,8))
##motor1 = Motor(7, 8)

@app.route("/forward", methods=["POST"])
def forward():
    print("Forward on")
    robot.forward()
    return "ok"

@app.route("/forward_off", methods=["POST"])
def forward_off():
    print("Forward off")
    robot.stop()
    return "ok"

@app.route("/reverse", methods=["POST"])
def reverse():
    print("Reverse on")
    robot.backward()
    return "ok"

@app.route("/reverse_off", methods=["POST"])
def reverse_off():
    print("Reverse off")
    robot.stop()
    return "ok"

@app.route("/left", methods=["POST"])
def left():
    print("Left on")
    robot.left()
    return "ok"

@app.route("/left_off", methods=["POST"])
def left_off():
    print("Left off")
    robot.stop()
    return "ok"

@app.route("/right", methods=["POST"])
def right():
    print("Right on")
    robot.right()
    return "ok"

@app.route("/right_off", methods=["POST"])
def right_off():
    print("Right off")
    robot.stop()
    return "ok"

@app.route("/", methods=["GET"])
def home():
    return render_template("main.html", title="Button", name="Prof. Eddy")
