import flask
from flask import Flask, render_template, request

app = Flask(__name__)

data1 = ""
data2 = ""

@app.route("/")
def interface():
	return render_template("index.html")

@app.route("/getWiimote", methods=["GET", "POST"])
def getData():
	global data1
	global data2
	OBJ = flask.jsonify({"data" : data1 + data2})
	if (data1 == "" or data2 == ""):
		return "NONE"
	else:
		return OBJ

@app.route("/sendWiimote", methods=["GET", "POST"])
def sendData():
	global data1
	global data2
	OBJ = request.form["data"]
	if (request.form["WII"] == "1"):
		data1 = OBJ
	else:
		data2 = OBJ
	return "thanks"

if __name__ == "__main__":
	app.run(debug = True)
