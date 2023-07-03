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
