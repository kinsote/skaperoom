create database Users;

create schema users;

create table usuario (
  id serial primary key,
  name text not null,
  birthday timestamp not null,
  password text not null,
  email text not null,  
  avatar text 
);
