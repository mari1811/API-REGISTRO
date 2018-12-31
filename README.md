# API-REGISTRO

EJECUCION LOCAL: 
(tener instalado node.js, express, mongoDB) 
-Abrir la terminal de mongoDB y dejarla abierta 
-Acceder a la carpeta por otra terminal 
-Ejecutar el comando "node index.js" 
-En el navegador "http://localhost:8080/api/contacts" 

POST JSON
{
    "message": "Usuario creado!",
    "data": {
        "_id": "5c298275daae3e0a20c09084",
        "nombre": "Maria",
        "apellido": "Rios",
        "email": "mari@gmail.com",
        "__v": 0
    }
}

GET JSON
{
    "status": "exito",
    "message": "Contactos recuperados exitosamente",
    "data": [
        {
            "_id": "5c298275daae3e0a20c09084",
            "nombre": "Maria",
            "apellido": "Rios",
            "email": "mari@gmail.com",
            "__v": 0
        }
    ]
}
