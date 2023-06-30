/*
Задание 1:
 
1.
```html
<div id="block">
  <p>1</p>
  <p>2</p>
</div>
```
Получите ссылку на первый абзац из дива с id равным `block`, выведите 
полученную ссылку в консоль.
2. 
```
<p class="www">text 1</p>
<p class="www">text 2</p>
```
Получите ссылку на первый абзац с классом `www` и вывести ее в консоль.


//1:
const divEl = document.querySelector(`#block`);
console.log(divEl);


//2:
const wwwEl = document.querySelector(`.www:nth-child(3)`);
console.log(wwwEl);

Задание 2: 
 
1. Дан тег в html: `<a class="link" href="#">link text html</a>`
Вам необходимо поменять текст внутри ссылки на “link text js”.
Заменить href, на значение https://developer.mozilla.org/ru/  
2. Дан тег в html: `<img class="photo" src="" alt="">`
Необходимо с помощью js поменять значение src на любое изображение из интернета.


const linkEl = document.querySelector(`.link`);
// linkEl.textContent = `link text js`;
// linkEl.innerText = `link text js`;
linkEl.innerHTML = `<span>link text js</span>`;
linkEl.href = `https://developer.mozilla.org/ru/`;


//2:
const imgEl = document.querySelector(`.photo`);
imgEl.src = `https://w.forfun.com/fetch/d6/d620a394f14eddac2b92d7d9b9da72d2.jpeg`;

Задание 3:
 
1. Дан тег в html: `<div class="content"></div>`.
2. Создайте новый элемент p.
3. Добавьте в него текст “Новый текстовый элемент”.
4. Добавьте созданный элемент внутрь тега html из первого пункта.
5. Удалите добавленный узел.

//1:
const pEl = document.createElement(`p`);
pEl.textContent = `Новый текстовый элемент`;
const divEl = document.querySelector(`.content`);
divEl.prepend(pEl);
// pEl.remove();
console.log(pEl);
document.body.append(pEl);

Задание 4:
 
1. Дан тег в html: `<div class="content"></div>`.
2. Создать элемент button в js, добавить в блок из первого пункта.
3. При клике на нкопку, созданную во втором пункте, в консоль должно выводиться 
число, указывающее, сколько раз пользователь нажал на данную кнопку.


const btnEl = document.createElement(`button`);
btnEl.textContent = `Кликни на меня)`;
console.log(btnEl);
const divEl = document.querySelector(`.content`);
divEl.prepend(btnEl);

let clicksCount = 0;
btnEl.addEventListener(`click`, () => {
  clicksCount++;
  console.log(clicksCount);
});

Задание 5:
 
1. Дан тег в html: `<div class="content"></div>`.
2. Создайте с помощью javascript новый элемент button
3. Добавьте текст для кнопки “Отправить”.
4. При клике на данную кнопку необходимо чтобы текст кнопки поменялся на 
“Текст отправлен” и кнопка стала недоступной для взаимодействия.
*/

// const btnEl = document.createElement(`button`);
// btnEl.textContent = `Отправить`;
// const divEl = document.querySelector(`.content`);
// divEl.prepend(btnEl);
// divEl.querySelector(`button`);
// console.log(divEl.querySelector(`button`));

// btnEl.addEventListener(`click`, () => {
//   btnEl.textContent = `Текст отправлен`;
//   btnEl.disabled = "true";
// });

const divEl = document.querySelector(`.content`);
const textEls = divEl.querySelectorAll(`.txt`);
// textEls.forEach((textEl) => {
//   console.log(textEl);
// });

// for (let i = 0; i < textEls.length; i++) {
//   console.log(textEls[i]);
// }

// for (const textEl of textEls) {
//   console.log(textEl);
// }

/*(Как пример не совсем подходит именно тут.)
for (const i in textEls) {
    console.log(textEls[i]);
}
*/

const lastEl = textEls[textEls.length - 1];
console.log(lastEl.parentElement.previousElementSibling.querySelector(`a`));

// console.log(lastEl);
console.log(textEls);
