#Программирование 
- Те же самые [[Списки Python]], но есть отличия 
- Элементы всегда перемешиваются в случайном порядке 
- Нельзя использовать повторные элементы   
```python
classmates = ("Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor")
students = set(classmates)
print (students) 
```
## Замороженное множество
- Изменять нельзя ВООБЩЕ
```python
classmates = ("Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor")
students = frozenset(classmates)
print (students) 
```