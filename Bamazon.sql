DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price DECIMAL(8, 2),
stock_quantity INTEGER(10),
primary key(item_id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Pizzazon", "Food", 9.99, 500);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Tacoszon", "Food", 6.99, 800);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Halo 3", "Gaming", 25.99, 200);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Overwatch", "Gaming", 49.99, 99);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Toilet", "Bathroom", 69.99, 750);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "SmartToilet with bluetooth", "Bathroom", 10000.00, 100);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "TV", "Electronics", 99.99, 600);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Smart-TV", "Electronics", 1010.99, 10);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "HunterxHunter vol.1", "Manga", 14.99, 49);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "One Piece vol.1", "Manga", 14.99, 87);



