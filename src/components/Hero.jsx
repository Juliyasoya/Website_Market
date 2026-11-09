import Icon from './Icon'

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container">
        <div className="hero-card">
          <div className="hero-copy">
            <span className="eyebrow">Новая коллекция</span>
            <h1>Вещи, с которыми хорошо</h1>
            <p>
              Продуманный выбор для дома и повседневной жизни. Спокойный
              дизайн, честные материалы и понятная доставка.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#catalog">
                Смотреть каталог <Icon name="arrow" />
              </a>
              <a className="button button--outline" href="#new">
                Новинки сезона
              </a>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Современный интерьер">
            <span className="hero-sticker">До −20% на новинки</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
