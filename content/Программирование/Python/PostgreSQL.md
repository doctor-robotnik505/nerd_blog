#Программирование 
```postgresql
\l # Просмотр всех баз данных

CREATE DATABASE database; # Создание базы данных database

\c database # Подключение к базе данных database

\conninfo # Отображение информации о подключении

CREATE TABLE users (
id BIGSERIAL NOT NULL PRIMARY KEY, # Большое целочисленное число, поле не пустое, ключ
email VARCHAR(100), 
login VARCHAR(50) NOT NULL, 
name VARCHAR(30) NOT NULL, 
date_of_birth DATE NOT NULL);

\d # Выводит все таблички в текущей базе данных
\d users # Выводит колонки для введёной таблички users

INSERT INTO users (email, login, name, date_of_birth) VALUES (
't.sargsyan2021@vk.com', 'DoctorRobotnik', 'Тигран', '2008-10-08');

SELECT * from users; # Выводим все поля из таблички users

SELECT MIN(age) FROM users; # Позволяет найти минимальное значение по полю (age) из таблицы (users)
SELECT MAX(age) FROM users; # Позволяет найти максимальное значение по полю (age) из таблицы (users)
SELECT AVG(age) FROM users; # Позволяет найти среднее значение по полю (age) из таблицы (users)
SELECT ROUND(AVG(age)) FROM users; # Позволяет найти округлённое среднее значение по полю (age) из таблицы (users)

SELECT SUM(age) FROM users; # Позволяет найти сумму всех значений по полю (age) из таблицы (users)
SELECT COUNT(age) FROM users; # Позволяет найти количество записей по полю (age) из таблицы (users)

SELECT email, SUM(id) FROM users GROUP BY email; # Позволяет группировать записи по определённому полю (email)
SELECT email, SUM(age) AS user_age FROM users GROUP BY email; # Почти то же самое, только с помощью AS можно задать псевдоним

SELECT NOW(); # Выводит текущую дату
SELECT NOW()::TIME; # Выводит текущую дату и время (до миллисекунд)
SELECT * FROM users WHERE date_of_birth > NOW(); # Позволяет найти все записи в табличке users, где дата рождения пользователя больше, чем текущая дата (то есть родились после текущей даты)
```
