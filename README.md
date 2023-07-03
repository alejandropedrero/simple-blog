# simple-blog

## Estructura

El proyecto se compone de las carpetas del servidor y la de frontend, que contiene todo el código de React (creado con Vite).

El archivo sql para crear la base de datos se encuentra en la carpeta database.

## Uso

Desde la raíz del proyecto ejecutar npm run dev y desde frontend también ejecutar npm run dev.

## Partes

El blog se compone de una Navbar, la vista de los posts (global e individual) y un footer.

Se puede crear un nuevo post, visualizarlo de forma individual, editarlo y borrarlo. Una vez eliminado el post su imagen asociada se borra también de la carpeta en la que se almacena (public/uploads).

Cada entrada requiere un título, un cuerpo o contenido y una imagen. Todos estos campos son editables.

## Dependencias

### Backend

multer - Para la subida de imágenes y almacenamiento en la carpeta public/upload
mysql2 - Para la conexión con la base de datos
cors - Para la api
express - Para node.js
nodemon - Para el desarrollo y no tener que lanzar el servidor con cada cambio

### Frontend

axios - Para realizar las peticiones HTTP
formik - Para ayudar con la validación de los formularios

## Maquetado

Utilicé Bootstrap ya que me encontré más cómodo que con Tailwind al ya conocerlo y tener práctica con esta librería después de haberla utilizado en el Bootcamp.

## Problemas, dificultades y soluciones

La mayoría de problemas en mi caso tuvieron lugar en todo lo relacionado con React, ya que me resulta bastante complejo de utilizar. El comienzo del proyecto suele ser más sencillo pero una vez va creciendo me suelo ver envuelto en un mar de páginas, componentes, estados y demás que me dificulta el avanzar. En parte por no tener bien asentadas las bases y en otra por no tener práctica con React y el mantener un orden y una estructura durante todo el proceso.

Para el backend la implementación fue similar a la del proyecto del Bootcamp con lo cual el proceso fue más rápido, exceptuando la parte de subir imágenes a una carpeta del proyecto para almacenarlas y después mostrarlas que sí me resulto bastante complicada.

Para solucionar todos los problemas en los momentos en los que necesitaba ayuda utilicé tutoriales de Youtube y ChatGPT.
