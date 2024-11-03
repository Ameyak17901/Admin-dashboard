from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db_utils import get_users as getusers,  get_user_data, getuserbyid, update_user, delete_user, add_user
from models import UpdatedUser, TokenData, UpdatedUser
import traceback
import string
import secrets
alphabet = string.ascii_letters + string.digits

origins = [
    'http://localhost:5173',
]

app = FastAPI()

app.add_middleware(CORSMiddleware,
allow_origins=origins,
allow_credentials=True, 
allow_headers=['*'],
allow_methods=["*"])

@app.get('/')
def index():
    return {'message': 'Hello world!'}

@app.get('/users')
def get_users():
    users = getusers()
    users_data = [{'id': user[0], 'name': user[1],'email': user[2], 'password': user[3], 'role': user[4], 'status': user[5]} for user in users]
    return {'data': users_data, 'message': 'connected successfully!'}

@app.post('/getuser')
def get_user_email(email: TokenData):
    print(email)
    res = get_user_data(email.email)
    print(res)
    return res

@app.get('/user/{id}')
def get_user_by_id(id):
    try:
        res = getuserbyid(id)
        print(res)
        return {'message': 'fetched successfully', 'data': res}
    except:
        print('error fetching')       

@app.put('/user/{id}')
def updateUser(user:UpdatedUser,id):
    try:
        print(user)
        res = update_user(user,id)
        return res
    except:
        print(traceback.print_exc)    

@app.post('/auth/login')
def auth_token(data: TokenData):
    try:
        user = get_user_data(data.email)
        password = ''.join(secrets.choice(alphabet) for _ in range(8))
        return {'data': user['data'], 'token': password}
    except:
        print(traceback.print_exc())

@app.delete('/user/{id}')
def deleteUser(id):
    try:
        res = delete_user(id)
        return res
    except:
        print(traceback.print_exc())    


@app.post('/user')
def addUser(user: UpdatedUser):
    try:
        res = add_user(user)
        return res
    except:
        print(traceback.print_exc())    


if __name__ == '__main__':
    app.run()