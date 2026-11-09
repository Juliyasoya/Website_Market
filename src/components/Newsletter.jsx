import { useState } from 'react'

function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <div>
            <h2>Только хорошее — в почту</h2>
            <p>
              Новые коллекции, полезные подборки и редкие скидки. Без лишнего
              шума.
            </p>
          </div>
          <div>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input type="email" required placeholder="Ваш email" aria-label="Ваш email" />
              <button className="button button--dark" type="submit">Подписаться</button>
            </form>
            {submitted && (
              <p className="newsletter-message" role="status">Готово! Форма работает в демо-режиме.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
