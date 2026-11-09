import { useState } from 'react'
import Icon from './Icon'

function Header({ cartCount, favoriteCount, query, onQueryChange }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="top-note">
        Бесплатная доставка по России при заказе от 10 000 ₽
      </div>
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#top" aria-label="Market — на главную">
            MARKET<span>.</span>
          </a>
          <nav
            className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
            aria-label="Основная навигация"
          >
            <a href="#catalog" onClick={() => setMenuOpen(false)}>Каталог</a>
            <a href="#new" onClick={() => setMenuOpen(false)}>Новинки</a>
            <a href="#benefits" onClick={() => setMenuOpen(false)}>Доставка</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
          </nav>
          <div className="header-actions">
            <label className="search-form">
              <Icon name="search" />
              <input
                type="search"
                placeholder="Поиск товаров"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                aria-label="Поиск товаров"
              />
            </label>
            <button className="icon-button" type="button" aria-label="Избранное">
              <Icon name="heart" />
              {favoriteCount > 0 && <span className="counter-badge">{favoriteCount}</span>}
            </button>
            <button className="icon-button" type="button" aria-label="Корзина">
              <Icon name="bag" />
              {cartCount > 0 && <span className="counter-badge">{cartCount}</span>}
            </button>
          </div>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
