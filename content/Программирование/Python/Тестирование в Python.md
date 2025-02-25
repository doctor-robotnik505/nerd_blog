#Программирование 
## Основной файл
```python
# Файл math.py
def add(x, y = 4):  
    return x + y
```
## Файл тестирования
```python
# Файл test-math.py
import unittest  
import math  
  
class TestMath(unittest.TestCase):  
    def test_add(self):  
        result = math.add(5, 7)  
        self.assertEqual(result, 12) # Проверка на 5 + 7 = 12
```
### Само тестирование
- Чтобы запустить тест, нужно добавить флаг -m и обратиться к модулю unittest
```shell
python3 -m unittest test-math.py 

Ran 1 test in 0.000s, OK
```

```shell
python3 -m unittest test-math.py

self.assertEqual(result, 12) # Проверка на 5 + 7 = 12
AssertionError: 13 != 12
----------------------------------------------------------------------
Ran 1 test in 0.001s

FAILED (failures=1)
```
# Усложняем
## Основной файл
```python
# Файл user.py
class User:  
    def __init__(self, name = "Bot", age = 35):  
        self.name = name  
        self.age = age
```
## Тестирование
```python
# Файл test-user.py
import unittest  
import user  
  
class TestUser(unittest.TestCase):  
    def test_init(self):  
        alex = user.User("Alex", 25)  
        self.assertEqual(alex.name, "Alex")  
        self.assertEqual(alex.age, 25)  
  
        bob = user.User("Bob")  
        self.assertEqual(bob.name, "Bob")  
        self.assertEqual(bob.age, 35)  
  
        default = user.User("Bot")  
        self.assertEqual(default.name, "Bot")  
        self.assertEqual(default.age, 35)  
t
if __name__ == '__main__':  
    unittest.main()
```