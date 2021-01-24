from flask import Flask, jsonify, request, json, make_response
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import datetime 
import jwt
from functools import wraps
from db.user import UserController

app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'mydatabase'
app.config['MYSQL_DATABASE_DB'] = 'test'
app.config['SECRET_KEY'] = '31dansd8ryouladhlauouavadavd'
app.config['CORS_HEADERS'] = "Content-Type"
app.config['CORS_RESOURCES'] = {r"/api/*": {"origins": "*"}}

mysql = MySQL(app)
userController = UserController(mysql)
cors = CORS(app)
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if "x-access-token" in request.headers:
            token = request.headers['x-access-token']
        
        if not token:
            return jsonify({"message" : "No token"}), 401
        data = None
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms="HS256")
        except:
            return jsonify({"message" : "Token is invalid"}), 401
        if userController.filter_by_public_id(data['public_id']):
            current_user = userController.filter_by_public_id(data['public_id'])
            return f(current_user, *args, **kwargs)
        else:
            return jsonify({"message" : "Token is expired"}), 401
        
    return decorated


@app.route('/api/user/show', methods=['GET'])
@token_required
def show(current_user):
    print(current_user.get_dict())
    return ""    
@app.route('/users', methods = ['GET'])
@token_required
def get_all_users(current_user):

    if not current_user.admin:
        return jsonify({"message" : "You don't have permission for this action!"})

    users = userController.get_all()
    print(users)
    return jsonify({"users" : users})

@app.route('/api/users/register', methods=['POST'])
def create():
    data = request.get_json()
    hashed_pass = generate_password_hash(data['password'], method='sha256')
    if userController.filter_by_username(data['username']):
        return jsonify({"message" : "This username was created!"})
    userController.add(public_id = str(uuid.uuid4()), username = data['username'], password = hashed_pass, admin = False)   
    return jsonify({'message' : 'Create successfully!'})

@app.route('/api/user/<public_id>/promote', methods=['PUT'])
@token_required
def promote(current_user, public_id):
    if not current_user.admin:
        return jsonify({"message" : "You don't have permission for this action!"})
        
    if userController.promote_user(public_id):
        return jsonify({"message" : "Promote user successfully"})
    return jsonify({"message" : "Not found user!"})
@app.route('/api/user/<public_id>/demote', methods=['PUT'])
@token_required
def demote(current_user, public_id):
    if not current_user.admin:
        return jsonify({"message" : "You don't have permission for this action!"})
        
    if userController.demote_user(public_id):
        return jsonify({"message" : "Demote user successfully"})
    return jsonify({"message" : "Not found user!"})
@app.route('/api/users/<public_id>', methods=['DELETE'])
@token_required
def delete(current_user, public_id):
    if current_user.public_id != public_id and not current_user.admin:
        return jsonify({"message" : "You don't have permission for this action!"})

    if userController.delete_user(public_id):
        return jsonify({"message" : "Delete user successfully"})
    return jsonify({"message" : "Not found user!"})
@app.route('/api/users/<public_id>', methods=['GET'])
@token_required
def get_user(current_user, public_id):

    if current_user.public_id != public_id and not current_user.admin:
        return jsonify({"message" : "You don't have permission for this action!"})

    user = userController.filter_by_public_id(public_id)
    if user:
        return jsonify(user.get_dict())
    return jsonify({"message" : "Not found user!"})

@app.route('/api/users/authenticate', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    if not username or not password:
        
        return make_response('Could not verify', 401)
    
    if username:
        user = userController.filter_by_username(username)
        if user:
            if check_password_hash(user.password, password):
                token = jwt.encode({'public_id' : user.public_id, 'exp' : datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
                return jsonify({"token" : token})

    return make_response('Could not verify', 401)

@app.route("/")
@cross_origin()
def index():
    return {"message" : "Allow CORS"}

if __name__ == "__main__":
    app.run(debug=True)