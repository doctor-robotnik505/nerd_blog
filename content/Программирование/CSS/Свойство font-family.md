#Программирование 
- Задаёт само семейство шрифтов 
- Для поиска шрифтов можно воспользоваться сервисом [от Google](https://fonts.google.com)
	- При этом можно импортировать шрифты, используя url адрес 
```css
@import url'https://fonts.googleapis.com/
css2? family=Sansita+Swashed:wght@300;500;900&display=swap');

.main_text {
	color: #000;
	text-align: center;
	font-size: 1.2em;
	font-style: normal;
	font-weight: bold;
	font-family: 'Sansita Swashed', cursive;
}
```