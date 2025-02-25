#Программирование 
- Буквально "lower equal"
- Позволяет сравнивать объекты как "Меньше или равно"
## Вариант с True
```python
class You: 
	name = "Pipa"
	number = 52
	
	def __le__(self, x):
		if(self.number <= x):
			return True
		else:
			return False
object = You()
print(object <= 53) # True
```
## Вариант с False
```python
class You: 
	name = "Pipa"
	number = 52
	
	def __le__(self, x):
		if(self.number <= x):
			return True
		else:
			return False
object = You()
print(object <= 51) # False
```