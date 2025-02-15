#Программирование 
- Позволяют выполнять Python-код последовательно внутри [[Циклы Python|цикла]]
- Последовательный вывод информации ([[Цикл while]])
```python
def generator(num):
    while num > 0:
        yield num
        num -=1
val = generator(6)
print(next(val)) # 6
print(next(val)) # 5
print(next(val)) # 4
print(next(val)) # 3
print(next(val)) # 2
print(next(val)) # 1
print(next(val)) # Ошибка StopIteration
```