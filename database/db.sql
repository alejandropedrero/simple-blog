CREATE DATABASE blog;

USE blog;

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    img VARCHAR(100),
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, content, img)
VALUES ('Fallout 4', 'El jugador es el Único Superviviente del Refugio 111, quien emerge 210 años después de la Gran Guerra. Antes a eso, hay un breve momento de gameplay durante la era de la pre-guerra, donde el jugador vive con su esposa e hijo.\n\nEl juego ocurre en Boston, Massachusetts. Lugares locales famosos se incluyen en el juego, tales como el Monumento de Paul Revere, el USS Constitution y también la Casa del Estado de Massachusetts con su bóveda de oro única. Otros lugares que aparecen en el juego son Scollay Square, renombrada como Goodneighbor, Bunker Hill y Fenway Park, renombrado como Diamond City.\n\nLos eventos de Fallout 4 ocurren en 2287; una década después de Fallout 3 y seis años después de los eventos de Fallout: New Vegas.\n\nEl escenario incluye montañas, regiones costeras, las afueras de la ciudad y el área central de Boston. Al suroeste se encuentra una gran zona aún inhóspita producto del desastre nuclear: el Mar Resplandeciente. El área inicial al noroeste contiene enemigos débiles y es relativamente segura, pero se vuelven más fuertes hacia el sureste del mapa.\n\nEl juego contiene más de 111.000 líneas de diálogo, más que todo el diálogo de Fallout 3 y The Elder Scrolls V: Skyrim juntos.', 'uploads/image-1688401009731-736915733.jpg');

INSERT INTO posts (title, content, img)
VALUES ('Fallout: New Vegas', 'Fallout: New Vegas tiene lugar durante el año 2281, cuatro años después de los sucesos de Fallout 3 y 204 años después de la "Gran Guerra" de 2077, estableciendo el contexto del juego como el más tardío de toda la saga. El juego se sitúa en la ciudad de New Vegas —una post-apocalíptica Las Vegas— y en el Desierto de Mojave. A diferencia de la mayoría de ciudades presentadas a lo largo de la saga, Las Vegas no recibió un ataque nuclear directo; los edificios permanecen intactos y la mutación de sus habitantes es mínima. La ciudad está dividida en varias facciones. La República de Nueva California, la Legión de César y las facciones de New Vegas, están en guerra y buscan el dominio sobre la ciudad. Algunos puntos del mapa en el juego importantes son: la Presa Hoover, que suministra energía a la ciudad, y la planta de energía solar HELIOS 1 (una instalación de aprovechamiento de energía solar traída de los primeros Fallout).El juego mete al jugador en la piel de un o una mensajero/ra del Mojave Express. El mensajero, mientras lleva un paquete con un contenido desconocido, es encontrado inconsciente en una tumba superficial, tras ser asaltado por un desconocido, que fracasó en su intento de asesinarlo. El mensajero es tratado de sus heridas por un médico local, el doctor Mitchell. Entonces comienza la creación del personaje (determinación de sus atributos y cualidades) por parte del jugador, antes de empezar a investigar el fallido intento de asesinato que sufrió, recuperar el paquete perdido y explorar la peligrosa región de Nevada.', 'uploads/image-1688401681275-742730016.jpg');


