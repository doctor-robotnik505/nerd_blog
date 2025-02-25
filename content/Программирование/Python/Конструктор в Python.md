#Программирование 
- Функция, которая срабатывает при создании какого-либо объекта 
```python
class User:
	name = ""
	surname = ""
	age = 0
	email = ""

	def __init__(self, name, surname, age, email):
		self.name = name
		self.surname = surname
		self.age = age
		self.email = email
admin = User("Admin", "Sargsyan", 16, "t.sargsyan2021@vk.com")
admin.printAll()
```