DROP TABLE JARDIN;
DROP TABLE USUARIO;

CREATE TABLE USUARIO(
nick_name VARCHAR (40) PRIMARY KEY,
first_name VARCHAR (40) NOT NULL,
last_name VARCHAR (40) NOT NULL,
password VARCHAR(40) NOT NULL,
gmail VARCHAR (60) NOT NULL
);

CREATE TABLE ALMACEN(
id_name VARCHAR (40) PRIMARY KEY,
images VARCHAR (60)
);

CREATE TABLE ARBOL(
id_arbol INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR (100) NOT NULL,
description VARCHAR (2000) NOT NULL,
date DATE NOT NULL,
nick_name VARCHAR (40),
name VARCHAR (40),
fecha_creacion timestamp NOT NULL default current_timestamp,
constraint fk_nick_name1 FOREIGN KEY (nick_name) references usuario(nick_name),
constraint fk_name1 FOREIGN KEY (name) references almacen(id_name)
)AUTO_INCREMENT = 100;

CREATE TABLE ARBUSTO(
id_arbusto INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR (100) NOT NULL,
description VARCHAR (2000) NOT NULL,
hour TIME NOT NULL,
nick_name VARCHAR (40),
name VARCHAR (40),
fecha_creacion timestamp NOT NULL default current_timestamp,
constraint fk_nick_name2 FOREIGN KEY (nick_name) references usuario(nick_name),
constraint fk_name2 FOREIGN KEY (name) references almacen(id_name)
)AUTO_INCREMENT = 100;

CREATE TABLE ROCA(
id_roca INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR (100) NOT NULL,
description VARCHAR (2000) NOT NULL,
date DATE NOT NULL,
nick_name VARCHAR (40),
name VARCHAR (40),
fecha_creacion timestamp NOT NULL default current_timestamp,
constraint fk_nick_name3 FOREIGN KEY (nick_name) references usuario(nick_name),
constraint fk_name3 FOREIGN KEY (name) references almacen(id_name)
)AUTO_INCREMENT = 100;




-- alter TABLE ARBOL ADD FOREIGN KEY (NICK_NAME) references usuario(NICK_NAME);
-- alter TABLE ARBOL ADD FOREIGN KEY (ID_NOTA) references NOTA(ID_NOTA);
