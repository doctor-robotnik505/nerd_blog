#Программирование
- Возможность переопределять методы в [[ООП]] 
```python
class Car:
	color = "" # Цвет
	weight = 0 # Вес
	speed = 0 # Скорость
	
	def set(self, color, weight, speed):
		self.color = color
		self.weight = weight
		selp.speed = speed

class BMW (Car): # Создаём класс-наследник для Сar
	isM_model = False

	def set(self, color, weight, speed, isM_model):
		self.color = color
		self.weight = weight
		self.speed = speed
		self.isM_model = isM_model

class Mercedes (Car):
	speed = 0

x3 = BMW() 
x3.set("Чёрный", 2400, 100, False) # Задаём цвет и вес на основе функции set
print(x3.color) # Выводим в терминал цвет 

m3 = BMW()
m3.set("Красный", 1400, 120, True)
print(m3.isM_model)
```
