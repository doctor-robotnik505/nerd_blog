#Программирование 
- Создаются с помощью операторов try и except
- Здесь приведён пример простейшего калькулятора, который выводит особый текст, если вместо [[Тип данных Integer|числа]] будет передана [[Тип данных String|строка]] 
	- В противном случае была бы не очень красивая ошибка ValueError c traceback'ом, которая может испугать какую-нибудь бабушку 
```python
try:
    x = int(input("Введите 1 число: "))
except ValueError:
    print("Пожалуйста, введите число, а не слово.\nВведённое вами слово будет принято за 0")
    x = 0
try:
    y = int(input("Введите 2 число: "))
except ValueError:
    print("Пожалуйста, введите число, а не слово.\nВведённое вами слово было принято за 0")
    y = 0
print("Результат: ", x + y)
```
## Улучшение 
- Здесь калькулятор не принимает самостоятельных решений в виде принятия переменной за 0, а ждёт пользователя исправлений (реализовано с помощью [[Цикл while]])
```python
user_input_x = False

while user_input_x == False:
    try:
        x = int(input("Введите 1 число: "))
        user_input_x = True
    except ValueError:
        print("Введите число, а не слово")

user_input_y = False

while user_input_y == False:
    try:
        y = int(input("Введите 2 число: "))
        user_input_y = True
    except ValueError:
        print("Введите число, а не слово")

print("Результат:", x + y)
```