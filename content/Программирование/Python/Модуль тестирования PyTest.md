#Программирование 
- Предварительно нужно установить в проект `pip install pytest`
```python
# Файл math_func.py
def add(x = 1, y = 4):  
    return x + y

def mult(x , y):  
    return x * y
```
## Тестирование
- Команда `pytest test_math.py`
- `pytest -v -k "str"` # Запускает только те функции, в имени которых есть слово "str"
```python
# Файл test_math.py
import pytest  
import math_func  
  
@pytest.mark.example  
def test_add(): # Не создаём класс! Не передаём параметр self!  
    result = math_func.add(5, 5)  
    assert result == 10 # Не создаём никаких новых функций!  
  
@pytest.mark.example  
def test_add_strings():  
    result = math_func.add("Hello", "World") # Можно складывать не только числа, но и функции  
    assert result == "HelloWorld"  
    assert type(result) is str # Проверяем переменную result на тип данных String  
    assert "Hello" in result # Проверяем содержание слова "Hello" в переменной result  
```
### Как избежать предупреждения 
- Нужно создать файл pytest.ini и поместить туда маркеры 
```init
[pytest]  
markers =  
    example  
    slow
    add
```
## Передача параметров 
```python
import pytest  
import math_func  
  
@pytest.mark.parametrize('num1, num2, res', [  
    (5, 5, 10),  
    ('Hello', 'World', 'HelloWorld')  
]) # Указываем, какие параметры передаём  
  
@pytest.mark.example  
def test_add(num1, num2, res): # Не создаём класс!   
assert math_func.add(num1, num2) == res # Не создаём никаких новых функций!
```