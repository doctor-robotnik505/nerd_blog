#Программирование 
- [[Модули Python]]
- [[Тип данных Integer]]
- [[Получение данных от пользователя]]
- [[Цикл while]]
```python
import sqlite3 as sql

connection = sql.connect('demo.sqlite') # Позволяет подключиться к базе данных/создать её
q = connection.cursor() # С помощью курсора мы можем взаимодействовать с базой данных

# Логика: база данных > таблица > данные

q.execute('''CREATE TABLE users (id int auto_increment primary key, name varchar, password varchar)''') # указываем тип данных (int), auto_increment каждый раз увеличивает значение на 1, primary придаёт уникальность; varchar - строка, ограниченная 255 символами
connection.commit() # Инициализирует наш запрос

name = input("Введите ваше имя: ")
password = input("Введите пароль: ")

print("Список пользователей:\n")
q.execute("INSERT INTO users (name, password) VALUES ('%s', '%s')"%(name, password)) # Добавляем в табличку users имя name и пароль password, в значения пишем относительные пути 
connection.commit()

q.execute("SELECT * FROM users") # Означает: выбрать всё из таблицы user
row = q.fetchone() # Выводим лишь одну конкретную запись. Нам не нужен коммит, так как мы лишь извлекаем данные, а не заносим

# Поскольку row - это список, мы его переберём с помощью цикла while
while row is not None: # Пока наш список будет не пустым
	print("Имя:", row[1], "| Пароль:", row[2])
	row = q.fetchone() # Выводим следующую запись
# Отключение от базы данных: 
q.close()
connection.close()
```