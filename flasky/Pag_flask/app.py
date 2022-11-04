from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)

# ...

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/user')
def user():
    return render_template('user.html')
@app.route('/cronograma')
def cronograma():
    return render_template('cronograma.html')
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

