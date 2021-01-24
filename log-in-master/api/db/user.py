class User():
    
    def __init__(self, tuple_= None, **kwargs):
        '''' tuple_ : (id, public_id, username, password, admin)'''
        if tuple_:
            print(tuple_)
            self.id, self.public_id, self.username, self.password, self.admin = tuple_
        else:
            for key, value in kwargs.items():
                setattr(self, key, value)

    def add(self, cnn):
        cur = cnn.cursor()
        cur.execute("insert into user (public_id, username, password, admin) values (%s, %s, %s, %s)", (self.public_id, self.username, self.password, self.admin))
        cnn.commit()
        cnn.close()
    def get_dict(self):
        dic = {}
        dic['public_id'] = self.public_id
        dic['username'] = self.username
        dic['password'] = self.password
        dic['admin'] = self.admin
        return dic

class UserController():

    def __init__(self, mysql):
        self.mysql = mysql
        self.connection = mysql.connect()
        self.cursor = self.connection.cursor()

    def get_connection(self):
        return self.mysql.connect()
    def add(self, **kwargs):
        new_user = User(**kwargs)
        conn = self.get_connection()
        conn.cursor().execute("insert into user (public_id, username, password, admin) values (%s, %s, %s, %s)", (new_user.public_id, new_user.username, new_user.password, new_user.admin))
        conn.commit()
        conn.close()
    
    def promote_user(self, public_id):
        conn = self.get_connection()
        cur = conn.cursor()
        cur.execute("select * from user where public_id = %s",public_id)
        if cur.fetchone():
            cur.execute("update user set admin = 1 where public_id = %s", public_id)
            conn.commit()
            conn.close()
            return True
        else:
            conn.commit()
            conn.close()
            return False
    def demote_user(self, public_id):
        conn = self.get_connection()
        cur = conn.cursor()
        cur.execute("select * from user where public_id = %s",public_id)
        if cur.fetchone():
            cur.execute("update user set admin = 0 where public_id = %s", public_id)
            conn.commit()
            conn.close()
            return True
        else:
            conn.commit()
            conn.close()
            return False
    
    def delete_user(self, public_id):
        conn = self.get_connection()
        cur = conn.cursor()
        cur.execute("select * from user where public_id = %s",public_id)
        if cur.fetchone():
            cur.execute("delete from user where public_id = %s", public_id)
            conn.commit()
            conn.close()
            return True
        else:
            conn.commit()
            conn.close()
            return False

    def get_all(self):
        conn = self.get_connection()
        cur = conn.cursor()
        cur.execute("select * from user")
        users = [User(tup).get_dict() for tup in cur.fetchall()]
        return users

    def get_user(self, public_id):
        conn = self.get_connection()
        cur = conn.cursor()
        cur.execute("select * from user where public_id = %s", public_id)
        temp = cur.fetchone()
        if temp:
            return User(temp).get_dict()
        return None
    
    def filter_by_username(self, username):
        conn = self.get_connection()
        cur = conn.cursor()
        cur.execute("select * from user where username = %s", username)
        temp = cur.fetchone()
        if temp:
            return User(temp)
        return None
    def filter_by_public_id(self, public_id):
        conn = self.get_connection()
        cur = conn.cursor()
        cur.execute("select * from user where public_id = %s", public_id)
        temp = cur.fetchone()
        if temp:
            return User(temp)
        return None
    
