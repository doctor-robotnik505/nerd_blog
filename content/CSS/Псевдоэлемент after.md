#Программирование 
- Позволяет обратиться к невидимой части за текстом 
- Нельзя выделить на сайте 
```html 
<div id = "tigran_id">Tigran text</div>
```

```css
#tigran_id::after {
	content: '505'; /* Какой текст выводится после объекта */
	color: red;
	text-decoration: line-through;
}
```