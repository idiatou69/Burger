DROP database IF exists burger_db;
create database burger_db;
use burger_db;
create table burgers(
 id int AUTO_INCREMENT,
 burger_name varchar(50),
 devoured boolean,
 primary key (id) 
)