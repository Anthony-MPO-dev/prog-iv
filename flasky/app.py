import os
from flask import Flask, render_template, redirect, url_for, session, flash
from livereload import Server
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, FloatField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bootstrap import Bootstrap5

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir,'data2.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'chave ultra secreta'
bootstrap = Bootstrap5(app)
db = SQLAlchemy(app)

class NameForm(FlaskForm):
    product = StringField("Nome do Suplemento: ",validators=[DataRequired()])
    marca = StringField("Marca: ",validators=[DataRequired()])
    preco = FloatField("Preço: ",validators=[DataRequired()])
	#gender = RadioField('Sexo: ',choices=[('M','Masculino'),('F','Feminino')])
    submit = SubmitField('Enviar')
    
class Suplementos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(64), unique=True, index=True)
    marca = db.Column(db.String(64),index=True)
    preco = db.Column(db.Float,index=True)

    def __repr__(self):
        return '<Produto %r>' % self.product_name

@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=Suplementos)

@app.route('/cadastro_de_suplementos',methods=['GET','POST'])
def cadastro():
    db.create_all()
    form = NameForm()
    if form.validate_on_submit():
        produto = Suplementos.query.filter_by(product_name=form.product.data).first()
        if produto is None:
            produto = Suplementos(product_name=form.product.data, marca=form.marca.data, preco=form.preco.data)
            db.session.add(produto)
            db.session.commit()
            session['known'] = False
            session['product'] = form.product.data
            session['marca'] = form.marca.data
            session['preco'] = form.preco.data
            flash('Produto inserido com sucesso!','success')
        else:
            session['known'] = True
            session['product'] = form.product.data
            session['marca'] = form.marca.data
            session['preco'] = form.preco.data
            form.product.data = ''
            flash('Produto já existe no sistema!','info')
            return redirect(url_for('cadastro_de_suplementos'))
    #return render_template('index_db.html',form=form, product=session.get('product'),known=session.get('known',False))
    return render_template('cadastro.html',form=form, product=session.get('product'),marca=session.get('marca'), preco=session.get('preco'), known=session.get('known',False))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/suplies')
def list():
    #db.create_all()
    lista = Suplementos.query.all()
    return render_template('supli_list.html',list=lista)


migrate = Migrate(app,db)
