#Программирование 
- Вещи, которые вызываются автоматически в ходе выполнения самой программы
## [[Функции Python|Функция]] dir
- Позволяет вывести все магические методы для определённого объекта (например, для [[Тип данных Integer|типа данных Integer]])
```python
print(dir(int))
```
## [[Магические методы для типа данных Integer]]  
## Практика
```python
class Pipa: 
	pass # В этом классе ничего не происходит
object = Pipa()
print(dir(object)) # Вывод в терминал, какие магические методы характерны для этого объекта
```
- [[Магический метод __new__]]
- [[Магический метод __init__]] 
```python
class You: 
	def __add__(self, str):
		print("You" + str)

	def __new__(self):
		self.__add__(self, "new")
		self.__init__(self) # Если хотим, чтобы init не гасился, а тоже успешно выводился в терминал
	def __init__(self):
		print("Init is started")
object = You()
object + " is Pipa" # Init is started \n You is Pipa
```
