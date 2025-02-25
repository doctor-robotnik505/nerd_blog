#Программирование 
- Буквально "greater eaqual"
- Позволяет сравнивать объекты как "Больше или равно"
## Вариант с False
```python
class You: 
	name = "Pipa"
	number = 52
	
	def __ge__(self, x):
		if(self.number >= x):
			return True
		else:
			return False
object = You()
print(object >= 53) # False
```
## Вариант с True
```python
class You: 
	name = "Pipa"
	number = 52
	
	def __ge__(self, x):
		if(self.number >= x):
			return True
		else:
			return False
object = You()
print(object >= 5) # True
```