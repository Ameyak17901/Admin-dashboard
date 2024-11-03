import mysql
import mysql.connector
import os
from dotenv import load_dotenv
import traceback

load_dotenv()

password = os.getenv('PASSWORD')

mydb = mysql.connector.connect(
    host='localhost',
    database='dcodeblock',
    user='root',
    password=f'{password}',
)


def get_users():
    try:
        cur = mydb.cursor()
        query = 'select * from users'
        cur.execute(query)
        data = cur.fetchall()
        cur.close()
        return data
    except:
        print('db error')

def get_user_data(email):
    try:
        cur = mydb.cursor()
        cur.execute(f"select * from users where email = '{email}'")
        data = cur.fetchone()
        print(data)
        cur.close()
        return {'message':'fetched successfully', 'data': {'id': data[0], 'name': data[1], 'email': data[2], 'role': data[3], 'status': data[5], 'password': data[4]}}
    except:
        print(traceback.print_exc())

def getuserbyid(id):
    try:
        cur = mydb.cursor()
        cur.execute(f'select * from users where id = {int(id)}')
        user = cur.fetchone()
        status = False
        print(user)
        if user[5] == 1:
            status = True            
        cur.close()    
        return {'id': user[0], 'name': user[1], 'email': user[2], 'status': status, 'password': user[3],'role': user[4]}
    except:
        print('error in db')    
    
def update_user(user, id):
    try:
        print(id, user)
        cur = mydb.cursor()
        cur.execute(f"update users set name ='{user.name}' , email ='{user.email}' , role = '{user.role}' ,password = '{user.password}' where id = {int(id)} ")
        mydb.commit()
        print(cur.rowcount)
        if cur.rowcount > 0:
            return {'message': 'updated successfully...', 'status': 200}
        return {'message': 'no matches found', 'status': 404}
    except:
        print(traceback.print_exc())        

def delete_user(id):
    try:
        print(id)
        cur = mydb.cursor()
        cur.execute(f"delete from users where id = {int(id)}")
        mydb.commit()
        if cur.rowcount > 0:
            return {'message': 'deleted successfully...', 'status': 200}        
        return {'message': 'Failed to delete', 'status': 500}
    except:
        print(traceback.print_exc())

def add_user(user):
    try:
        cur = mydb.cursor()
        cur.execute(f"insert into users (name,email,role,password) values('{user.name}', '{user.email}', '{user.role}', '{user.password}')")
        mydb.commit()
        if cur.rowcount > 0:
            return {'message': 'added successfully', 'status': 200 }
        return {'message': 'Failed to add...', 'status':500}
    except:
        print(traceback.print_exc())            