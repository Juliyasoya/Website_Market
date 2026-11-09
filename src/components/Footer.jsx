function Footer() {
  return (
    <footer className="site-footer" id="contacts">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand" href="#top">MARKET<span>.</span></a>
          <p>
            Готовый React‑шаблон интернет‑магазина. Замените контент, подключите
            каталог — и развивайте проект дальше.
          </p>
        </div>
        <div className="footer-column">
          <h3>Магазин</h3>
          <a href="#catalog">Каталог</a>
          <a href="#new">Новинки</a>
          <a href="#catalog">Популярное</a>
        </div>
        <div className="footer-column">
          <h3>Покупателям</h3>
          <a href="#benefits">Доставка</a>
          <a href="#benefits">Оплата</a>
          <a href="#benefits">Возврат</a>
        </div>
        <div className="footer-column">
          <h3>Контакты</h3>
          <a href="tel:+78005553535">8 800 555-35-35</a>
          <a href="mailto:hello@market.test">hello@market.test</a>
          <a href="#top">Москва, Россия</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 MARKET. Учебный шаблон.</span>
        <span>React + Vite</span>
      </div>
    </footer>
  )
}

export default Footer
