#Программирование 
- Массивы данных в чистом виде 
- Состоит из множества различных элементов 
- Для создания необходимо **дать имя** и **присвоить значение**
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
print (classmates)
```
## Действия со списком
### Вывод отдельных элементов
- Помним, что отчёт начинается с 0
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
print (classmates[0]) # Timofey
```
### Изменение значений 
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
classmates[0] = "Armrestler"
print (classmates[0]) # Armrestler
```
### Метод append 
- Добавление лишь 1 значения в конец списка 
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
classmates.append("Bogdan")
print (classmates[6]) # Bogdan
```
- Помним про синтаксис, нужно помещать в скобки, как с [[Оператор print|print]]
### Метод extend 
- Добавление целого списка в конец исходного списка 
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
newClassmates = ["Bogdan", "Nastya", "Mariya"]
classmates.extend(newClassmates)
print (classmates)
```
### Метод remove
- Удаление конкретного элемента из списка 
	- Удаляет только один
	- Только тот, кто первее попался 
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
classmates.remove("Tigran")
print (classmates)
```
- Указываем именно сам элемент, а не его индекс! 
### Метод pop
- Удаление конкретного элемента по его индексу
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
classmates.pop(4)
print (classmates)
```
### Метод sort
- Сортировка списка 
	- Слова выстраивает в алфавитном порядке 
	- Числа выстраивает по возрастанию 
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
classmates.sort()
print (classmates)
```
### Метод reverse 
- Переворачивает список (если Igor был в конце, теперь он в начале)
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
classmates.reverse()
print (classmates) 
```
### Метод clear 
- Очищает (удаляет) список 
```python
classmates = ["Timofey", "Nikita", "Anton", "Arseniy", "Tigran", "Igor"]
classmates.clear()
print (classmates) # []
```
