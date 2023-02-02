create table dish (
    id  bigserial not null,
    name varchar(30),
    price float8 check (price>=0),
    type_dish_id int8,
    primary key (id),
    foreign key (type_dish_id) references type_dish(id));

create table menu (
    id  bigserial not null,
    time_end varchar(10),
    time_start varchar(10),
    name varchar(30),
    primary key (id));

create table menu_dish (
    menu_id int8 not null,
    dish_id int8 not null,
    foreign key (menu_id) references menu(id),
    foreign key (dish_id) references dish(id));

create table type_dish (
    id  bigserial not null,
    type_name varchar(255),
    primary key (id));
