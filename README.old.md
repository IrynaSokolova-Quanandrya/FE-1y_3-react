1. MPA vs SPA
2. Що таке react
3. Virtual DOM
4. Для створення React-застосунку необхідні Node.js, Webpack, Babel, React і
   DevTools.
5. Створюємо react-app
6. Що знаходиться в package.json
7. public
8. div з id root
9. render ()
10. Інструменти розробника
11. JSX:

    - створення
    - завжди закриваючий слеш
    - фрагмент
    - вікно во js - JSX вираз {}
    - рендер за умовою
    - Колекції
    - Ключі​

12. Що таке React компонент
    - функціональний
    - класовий
    - умови назви компонентів та їх використання
13. App

`JSON` [ { "id": "id-1", "url":
"https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
"title": "Feathers. Art abstract", "price": 500, "author": { "tag":
"ractapopulous", "url": "https://pixabay.com/users/ractapopulous-24766/" },
"quantity": 10 }, { "id": "id-2", "url":
"https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg", "title":
"Bird. Animal art abstract", "price": 400, "author": { "tag": "ractapopulous",
"url": "https://pixabay.com/users/ractapopulous-24766/" }, "quantity": 15 }, {
"id": "id-3", "url":
"https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg",
"title": "Flowers. Tulip nature art abstract", "price": 600, "author": { "tag":
"ractapopulous", "url": "https://pixabay.com/users/ractapopulous-24766/" },
"quantity": 5 } ]

## компонент 'Painting'

```HTML

<div>
  <img src="" alt="" width="480" />
  <h2></h2>
  <p>Автор: <a href=""></a></p>
  <p>Ціна: грн</p>
  <p>Доступність: закінчується чи є в наявності</p>
  <button type="button">Додати в кошик</button>
</div>
```

## компонент 'PaintingList'

<ul>
  <li>Painting</li>
  ...
</ul>

## компонент 'Section'

<div style="outline: 1px solid tomato;">
  <h2></h2>
  Контент
</div>
