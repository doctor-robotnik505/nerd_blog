#Программирование 
```python
from kivy.app import App # Импортируем основной класс  
from kivy.uix.button import Button # Импортируем класс для кнопок  
from kivy.uix.boxlayout import BoxLayout # Импортируем тип слоя, который позволяет расположить объекты друг под другом (вертикально или горизонтально)  
  
class DuckyApp(App):  
    def build(self): # Обязательная функция!!  
        box = BoxLayout() # Создаём объект на основе класса BoxLayout  
        button1 = Button(text="Привет всем!") # Такой текст будет отображаться на кнопке  
        button2 = Button(text="Привет всем (снова)!")  
        box.add_widget(button1) # Позволяет добавить объект на сам слой  
        box.add_widget(button2)  
        return box  
if __name__ == '__main__': # Если мы запускаем файл  
    DuckyApp().run() # Запускаем функцию run
```
## Создание объектов 
```kivi
BoxLayout:
	orientation: 'vertical'
	padding: '50sp'
	spacing: '20sp'

	Button:
		text: "Hello"
		pos: 100, 100 # Ничего не меняется, потому что слой BoxLayout
		size: 100, 100
		size_hint: None, None

	Button:
		text: "Hi"
		size_hint: 0.5, 0.3
```

```kivi
FloatLayout:
	padding: '50sp'
	spacing: '20sp'

	Button:
		text: "Hello"
		#pos: 200, 300
		#pos_hint: {'x': 0, 'y': 0} # Начало координат
		pos_hint: {'center_x': 0.5, 'y': 0} # Прижимается к центру по OX
		#pos_hint: {'right': 1, 'y': 0} # Прижимается к правому краю по ОХ
		#pos_hint: {'x': 0, 'top': 1} # Прижимается к левому краю по OY
		#pos_hint: {'x': 0, 'center_y': 0.5} # Прижимается к центру по OY
		pos_hint: {'center_x': 0.5, 'center_y': 0.5} # Идеально по центру по OY
		
		#size: 100, 100
		size_hint: 0.2, 0.3

	#Button:
		#text: "Hi"
		#size_hint: 0.5, 0.3
```