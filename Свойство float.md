#Программирование 
- Позволяет позиционировать блоки 
## Позиционирование №1 (left и left)
- Красный блок находится слева, синий блок - после него, так как имеют одно позиционирование
```css
#first {
	float: left;
	background: red;
}
#second {
	float: left;
	background: blue;
}
```
## Позиционирование №2 (left и right)
- Красный блок находится слева, синий блок - справа, так как имеют разное позиционирование 
```css
#first {
	float: left;
	background: red;
}
#second {
	float: right;
	background: blue;
}
```
## Позиционирование №3 (right и right)
- Красный блок находится справа, синий блок - левее (после него), так как имеют одно позиционирование 
```css
#first {
	float: right;
	background: red;
}
#second {
	float: right;
	background: blue;
}
```