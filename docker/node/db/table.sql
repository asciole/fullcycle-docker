CREATE DATABASE IF NOT EXISTS desafiodb;

USE desafiodb;

CREATE TABLE IF NOT EXISTS people (
    id integer not null auto_increment primary key,
    name varchar(200)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;
