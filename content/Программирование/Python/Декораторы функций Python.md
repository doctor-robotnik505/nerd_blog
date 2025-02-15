#Программирование 
- Можно создать [[Функции Python|функцию]] внутри функции 
- Посл
```python
def auth():
	def wrapper():
		isAuth = True
		if(isAuth):
			func()
		else:
			print("You need to be auth")
			func()
	return wrapper
@auth # Вызов декоратора
def show():
	print("Show function")
show()
```