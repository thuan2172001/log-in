from flask import Flask, jsonify
from flaskext.mysql import MySQL
from db.user import User
app = Flask(__name__)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'mydatabase'
app.config['MYSQL_DATABASE_DB'] = 'test'

mysql = MySQL(app)
@app.route('/api')
def index():

    conn = mysql.connect()
    cur = conn.cursor()
    cur.execute("select * from user")
    users = [User(user).get_dict() for user in cur.fetchall()]
    context = jsonify(users)
    return context
if __name__ == "__main__":
    app.run(debug=True)