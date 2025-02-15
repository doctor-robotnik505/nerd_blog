#Программирование 
- Позволяет использовать изображение в качестве заднего фона 
- Можно прописывать в строчку через ; с помощью background:
## Изображение с Интернета
```css
body {
	background-image: url('https://photowebexpo.ru/assets/uploads/images/PHOTOGRAPHY/COMPETITIONS/Nature-InFocus/23/PhotoWebExpo-06-Merche-Llobera-Nature-inFocus-Photography-Awards-2023.jpg');
}
```
## Локальное изображение 
```css
body {
  background-image: url('../img/IMG_5196.jpeg')
}
```
## Как избежать повторения 
- Для этого надо добавить свойство background-repeat и задать значение no-repeat
```css
body {
  background-image: url('../img/IMG_5196.jpeg');
- background-repeat: no-repeat;
}
```
### Дополнительные свойства 
- repeat-x повторение по оси OX
- repeat-y повторение по оси OY
## Положение фона 
- background-position 
	- left
	- right 
	- center 
## Размер фона 
- background-size
	- auto 
	- contain
	- cover - заполняет фоном полностью 
## Ещё одно положение 
- background-attachment
	- fixed фиксирует картинку, создаёт эффект параллакса 