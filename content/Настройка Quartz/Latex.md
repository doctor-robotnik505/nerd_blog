---
title: Latex
draft: false
tags: 
aliases:
---
Этот плагин добавляет поддержку LaTeX в Quartz. This plugin adds LaTeX support to Quartz. See [[features/Latex|Latex]] for more information.
> [!note] Дополнительно
> Посетите информацию о [[Конфигурация Quartz|конфигурации]], если хотите узнать, как добавить, удалить или изменить конфиги ваших плагинов
## Опции конфигурации
- `renderEngine`: движок, который используется для рендера выражений LaTeX. Есть выбо =р между `"katex"` для [KaTeX](https://katex.org/), `"mathjax"` для [MathJax](https://www.mathjax.org/) [SVG rendering](https://docs.mathjax.org/en/latest/output/svg.html) или `"typst"` for [Typst](https://typst.app/). По умолчанию включен KaTeX
- `customMacros`: кастомные макросы для всех блоков LaTeX. It takes the form of a key-value pair where the key is a new command name and the value is the expansion of the macro. For example: `{"\\R": "\\mathbb{R}"}`

> [!note] Поддержка Typst
>
> По данным на 12.12.2024 typst не поддерживает inline-math

## Синтаксис
Математические блоки могут быть отображены путём разделения математического выражения символов `$$`.
```
$$
f(x) = \int_{-\infty}^\infty
    f\hat(\xi),e^{2 \pi i \xi x}
    \,d\xi
$$
```
$$
f(x) = \int_{-\infty}^\infty
    f\hat(\xi),e^{2 \pi i \xi x}
    \,d\xi
$$
$$
\begin{aligned}
a &= b + c \\ &= e + f \\
\end{aligned}
$$
$$
\begin{bmatrix}
1 & 2 & 3 \\
a & b & c
\end{bmatrix}
$$
$$
\begin{array}{rll}
E \psi &= H\psi & \text{Expanding the Hamiltonian Operator} \\
&= -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} \psi + \frac{1}{2}m\omega x^2 \psi & \text{Using the ansatz $\psi(x) = e^{-kx^2}f(x)$, hoping to cancel the $x^2$ term} \\
&= -\frac{\hbar^2}{2m} [4k^2x^2f(x)+2(-2kx)f'(x) + f''(x)]e^{-kx^2} + \frac{1}{2}m\omega x^2 f(x)e^{-kx^2} &\text{Removing the $e^{-kx^2}$ term from both sides} \\
& \Downarrow \\
Ef(x) &= -\frac{\hbar^2}{2m} [4k^2x^2f(x)-4kxf'(x) + f''(x)] + \frac{1}{2}m\omega x^2 f(x) & \text{Choosing $k=\frac{im}{2}\sqrt{\frac{\omega}{\hbar}}$ to cancel the $x^2$ term, via $-\frac{\hbar^2}{2m}4k^2=\frac{1}{2}m \omega$} \\
&= -\frac{\hbar^2}{2m} [-4kxf'(x) + f''(x)] \\
\end{array}
$$

> [!warning] Важно
> Из-за ограничений в [базовой библиотеке синтаксического анализа](https://github.com/remarkjs/remark-math) математические вычисления блоков в Quartz требуют, чтобы разделители `$$` находились на новой строке, как указано выше.
### Встроенное выражение
Аналогичным образом, встроенные выражения могут быть отображены путем разделения математического выражения одним символом доллара `$`. Например, `$e^{i\pi} = -1$` даёт $e^{i\pi} = -1$
### Избежание использования
Бывают случаи, когда в абзаце может быть одновременно несколько символов `$`, что может случайно вызвать MathJax/Katex.  Чтобы обойти это, вы можете избежать знака доллара, выполнив вместо него `\$`.
- Неправильно: `У меня есть $1 у тебя есть $2` даёт: у меня есть $1 у тебя есть $2
- Правильно: `У меня есть \$1 у тебя есть \$2` даёт у меня есть \$1 у тебя есть \$2
### Использование mhchem
Добавьте следующие выражения на верх файла `quartz/plugins/transformers/latex.ts` (до всех остальных импортов):

```ts title="quartz/plugins/transformers/latex.ts"
import "katex/contrib/mhchem"
```
## О плагине
- Категория: Transformer
- Название функции: `Plugin.Latex()`