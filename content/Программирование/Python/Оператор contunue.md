#Программирование 
- Продолжает выполнение цикла только если выполняется условие (через [[Условный оператор if|if]])
```python
list = [6, 8, "Stroka", False, 46.7, 234, 1]
y = 0
while y < len(list):
    if y % 2 == 0:
        y += 1
        continue
    print("Значение элемента под индексом", y, "равно", list[y])
    y += 1
```