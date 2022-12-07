from flask import Flask, render_template, url_for, json, jsonify, request, redirect, make_response
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from flask_bootstrap import Bootstrap5
import requests
import json, os
import urllib.request, json

app = Flask(__name__)
boostrap = Bootstrap5(app)

@app.route('/',methods=['GET','POST'])
def home():
	return render_template('home.html')

@app.route("/get",methods=["POST"])
def get_cards():
    req = request.get_json()
    url = req['request']
    print(url)
    #response = urllib.request.urlopen(url)
    #data = response.read()
    jsondata = requests.get(url).json()#['data']#json.loads(data)
	

    res = make_response(jsonify(jsondata), 200)
    return res



def getType(type, types):
	if type in types or type == '':
		return True
	else:
		return False




if __name__ == '__main__':
  app.run(debug=True)
