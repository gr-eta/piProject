from flask import Flask, render_template
from gpiozero import Robot
from gpiozero import Motor

app = Flask(__name__)

## side wheels
robot = Robot(left=(7,8), right=(9,10))
# Third wheel
motor3 = Motor(22,27)

@app.route("/forward", methods=["POST"])
def forward():
    print("Forward on")
    robot.forward()
    motor3.forward()
    return "ok"

@app.route("/forward_off", methods=["POST"])
def forward_off():
    print("Forward off")
    robot.stop()
    motor3.stop()
    return "ok"

@app.route("/reverse", methods=["POST"])
def reverse():
    print("Reverse on")
    robot.backward()
    motor3.backward()
    return "ok"

@app.route("/reverse_off", methods=["POST"])
def reverse_off():
    print("Reverse off")
    robot.stop()
    motor3.stop()
    return "ok"

@app.route("/left", methods=["POST"])
def left():
    print("Left on")
    robot.right()
    motor3.right()
    return "ok"

@app.route("/left_off", methods=["POST"])
def left_off():
    print("Left off")
    robot.stop()
    motor3.stop()
    return "ok"

@app.route("/right", methods=["POST"])
def right():
    print("Right on")
    robot.left()
    motor3.left()
    return "ok"

@app.route("/right_off", methods=["POST"])
def right_off():
    print("Right off")
    robot.stop()
    motor3.stop()
    return "ok"

@app.route("/", methods=["GET"])
def home():
    return render_template("main.html", title="Button", name="Prof. Eddy")
