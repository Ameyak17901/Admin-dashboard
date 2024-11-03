from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    email: str
    password: str
    role: str
    status: bool    

class UpdatedUser(BaseModel):
    name: str
    email: str
    role: str
    password: str

class TokenData(BaseModel):
    email: str    