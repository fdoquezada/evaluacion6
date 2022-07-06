# E V A L U A C I Ó N M Ó D U L O 6
Almacenar roommates nuevos ocupando
random user.
Devolver todos los roommates
almacenados. Registrar nuevos gastos.
Devolver el historial de gastos
registrados. Modificar la información
correspondiente a un gasto.
Eliminar gastos del historial.
Descripción
En esta prueba deberá crear un servidor con
Node con su respectiva interfaz HTML y
cuya temática está basada en el registro de
gastos entre roommates.
Además deberá servir una API REST que
permita hacer lo siguiente:
A continuación se muestra una imagen con
un ejemplo de interfaz que deberá devolver
en la ruta raíz del servidor:

> ![image](https://user-images.githubusercontent.com/86123944/177456799-cc863798-e9e8-48ce-b435-376cffe97390.png)

## Rutas que debes crear en tu servidor:
/GET: Debe devolver el documento HTML
disponibilizado en el apoyo.
/roommates POST: Almacena un nuevo roommate
ocupando random user.
/roommates GET: Devuelve todos los roommates
almacenados.
/gastos GET: Devuelve el historial con todos los
gastos registrados.
/gastos PUT: Edita los datos de un gasto.
/gastos DELETE: Elimina un gasto del historial


## Requerimientos
1.Ocupar el módulo File System para la
manipulación de archivos alojados en el servidor
(3 Puntos)
Capturar los errores para condicionar el código a
través del manejo de excepciones. (1 Punto)
El botón “Agregar roommates” de la aplicación
cliente genera una petición POST (sin payload)
esperando que el servidor registre un nuevo
roommate random con la API randomuser, por lo
que debes preparar una ruta POST /roommates
en el servidor que ejecute una función asíncrona
importada de un archivo externo al del servidor
(la función debe ser un módulo), para obtener la
data de un nuevo usuario y la acumule en un
JSON (roommates.json). El objeto
correspondiente al usuario que se almacenará
debe tener un id generado con el paquete UUID.
(2 Puntos).
Crear una API REST que contenga las siguientes
rutas:
GET /gastos: Devuelve todos los gastos
almacenados en el archivo gastos.json.
POST /gasto: Recibe el payload con los datos
del gasto y los almacena en un archivo JSON
(gastos.json).
c. PUT /gasto: Recibe el payload de la consulta y
modifica los datos almacenados en el servidor
(gastos.json).
d. DELETE /gasto: Recibe el id del gasto usando las
Query Strings y la elimine del historial de gastos
(gastos.json).
e. GET /roommates: Devuelve todos los roommates
almacenados en el servidor (roommates.json) Se
debe considerar recalcular y actualizar las cuentas
de los roommates luego de este proceso. (3 Puntos)
5. Devolver los códigos de estado HTTP
correspondientes a cada situación. (1 Punto)
6. Enviar un correo electrónico a todos los
roommates cuando se registre un nuevo gasto. Se
recomienda agregar a la lista de correos su correo
personal para verificar esta funcionalidad. (3 Puntos)
