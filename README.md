# MARKET — React starter

Стартовый шаблон интернет-магазина на React 19 и Vite 8.

**[Live demo](https://juliyasoya.github.io/Website_Market/) · [GitHub repository](https://github.com/Juliyasoya/Website_Market)**

## Запуск

```bash
npm install
npm run dev
```

Проверка production-сборки:

```bash
npm run build
```

## Структура

- `src/components` — независимые секции и карточки интерфейса.
- `src/data/catalog.js` — демонстрационные категории и товары.
- `src/App.jsx` — состояние поиска, фильтра, избранного и корзины.
- `src/App.css` — адаптивная дизайн-система и стили страницы.

## Визуальный ориентир

[Ecom — Free Ecommerce Figma Web Design Template](https://templatesjungle.com/downloads/ecom-figma/)

Макет выбран как визуальное направление: чистая сетка, крупный первый экран,
карточки товаров и блок подписки. В исходном описании указаны auto-layout,
редактируемые слои, бесплатные шрифты и разрешение на личное и коммерческое
использование.

## Следующие шаги

1. Добавить React Router и страницы каталога, товара и корзины.
2. Подключить реальный API или CMS вместо `src/data/catalog.js`.
3. Заменить демонстрационные изображения и тексты материалами бренда.
4. Подключить авторизацию, оплату и сохранение корзины.
