\c testr;

create table type_dish (
    id  bigserial not null,
    type_name varchar(255),
    primary key (id));

create table dish (
    id  bigserial not null,
    name varchar(255),
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
    foreign key (dish_id) references dish(id) ON DELETE CASCADE);


INSERT INTO type_dish (type_name)
VALUES ('Итальянское'),
       ('Французcкое'),
       ('Классическое');

INSERT INTO dish (name, price, type_dish_id)
VALUES ('Спагетти карбонара с красным луком', 200, 1),
       ('Классические сырники из творога на сковороде', 50, 3),
       ('Тимбаль', 150, 2),
       ('Салат Цезарь классический с курицей', 50, 3),
       ('Лазанья классическая с мясом', 100, 1),
       ('Чай', 10, 3),
       ('Компот', 15, 3);

INSERT INTO menu (time_end, time_start, name)
VALUES ('08:30', '08:00', 'Завтрак'),
       ('14:00', '13:00', 'Обед'),
       ('18:00', '17:00', 'Ужин');

INSERT INTO menu_dish (menu_id, dish_id)
VALUES (1, 2),
       (1, 6),
       (2, 7),
       (2, 1),
       (3, 5),
       (3, 6),
       (3, 4);
       