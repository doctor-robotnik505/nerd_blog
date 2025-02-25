#Программирование 
- [[ООП]]
- Создаётся один класс-родитель (например, User)
- На основе этого класса мы создаём классы-наследники
- Синтаксис: `class имяНаследника (имяРодителя)`
```python
class Car:
	color = "" # Цвет
	weight = 0 # Вес
	speed = 0 # Скорость
	
	def set(self, color, weight, speed):
		self.color = color
		self.weight = weight
		self.speed = speed

class BMW (Car): # Создаём класс-наследник для Сar
	isM_model = False

class Mercedes (Car):
	speed = 0

x3 = BMW() 
x3.set("Чёрный", 2400, 100) # Задаём цвет и вес на основе функции set
print(x3.color) # Выводим в терминал цвет 

m3 = BMW()
m3.set("Красный", 1400, 120)
print(m3.weight)
```