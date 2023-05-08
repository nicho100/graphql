# graphql
para correr el codigo usar node server.js
para los test de graphql se pide ingresar un usuario y una contraseña
para traer los usuarios usar: 
query users {
  users {
    id
    username
    password
  }
}
para traer un usuario por id:
query user($userId: ID!) {
  user(userId:$userId){
    id
  } 
}
y en la parte de variables escribir 
{
  "userId": "1",
  
}
