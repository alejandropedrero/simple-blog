# simple-blog

## Estructura del proyecto

El proyecto se compone de las carpetas del servidor y la de frontend.

Dentro de server se encuentran las rutas con sus correspondientes controladores y los archivos para la conexión de la base de datos, de utilidad y el principal, index.js.

El archivo sql para crear la base de datos se encuentra en la carpeta database. Contiene además 3 posts base para que no comience el blog vacío.

La carpeta frontend contiene todo el código de React (creado con Vite).

Dentro de src están los archivos principales para ejecutar la aplicación, así como carpetas para la api, imágenes, componentes y páginas.

## Dependencias

> ### Backend

multer - Para la subida de imágenes y almacenamiento en la carpeta public/uploads


mysql2 - Para la conexión con la base de datos


cors - Para la api


express - Para node.js


nodemon - Para el desarrollo y no tener que lanzar el servidor con cada cambio

> ### Frontend

axios - Para realizar las peticiones HTTP


formik - Para ayudar con la validación de los formularios

## Maquetado

Utilicé Bootstrap ya que me encontré más cómodo que con Tailwind al ya conocerlo y tener práctica con esta librería después de haberla utilizado en el Bootcamp. Algún retoque adicional con CSS.

## Uso

Desde la raíz del proyecto ejecutar npm run dev y npm install y desde frontend también ejecutar npm run dev y npm install.

Backend - http://localhost:4000

Frontend - http:localhost:5173

## Partes de la aplicación 

El blog se compone de una Navbar, la vista de los posts (global e individual) y un footer.

Se puede crear un nuevo post, visualizarlo de forma individual o global junto al resto, editarlo y borrarlo. Una vez eliminado el post su imagen asociada se borra también de la carpeta en la que se almacena (public/uploads).

Cada entrada requiere de un título, un cuerpo o contenido y una imagen. Todos estos campos son editables.


## Problemas, dificultades y soluciones

La mayoría de problemas en mi caso tuvieron lugar en todo lo relacionado con React, ya que me resulta bastante complejo de utilizar. El comienzo del proyecto suele ser más sencillo pero una vez va creciendo me suelo ver envuelto en un mar de páginas, componentes, estados y props que me dificulta el avanzar. En parte por no tener bien asentadas las bases y en otra por no tener práctica con React y el mantener un orden y una estructura durante todo el proceso. Estoy en ello para mejorar en este aspecto.

Para el backend la implementación fue similar a la del proyecto del Bootcamp con lo cual el proceso fue más rápido, exceptuando la parte de subir imágenes a una carpeta del proyecto para almacenarlas y después mostrarlas que sí me resulto bastante complicada. La ayuda de compañeros que proporcionaron información acerca del paquete multer ayudó.

Para solucionar los problemas en los momentos en los que necesitaba ayuda utilicé tutoriales de Youtube y ChatGPT.
