#!/usr/bin/python

import httplib2
import json
import random
import string
import requests

from flask import (Flask,
                   render_template,
                   request,
                   redirect,
                   url_for,
                   flash,
                   jsonify,
                   make_response,
                   session as login_session)

app = Flask(__name__)


@app.route('/photo')
def photo():
    return render_template('photo.html')

if __name__ == '__main__':
    app.secret_key = 'Super_Secret_Key'
    app.debug = True
    app.run(host='0.0.0.0', port=9080)
