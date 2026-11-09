import Icon from './Icon'

const benefits = [
  { icon: 'truck', title: 'Быстрая доставка', text: 'По России от 2 дней' },
  { icon: 'shield', title: 'Безопасная оплата', text: 'Защищённые платежи' },
  { icon: 'return', title: 'Лёгкий возврат', text: '30 дней на решение' },
  { icon: 'message', title: 'Мы на связи', text: 'Ежедневно с 9:00 до 21:00' },
]

function Benefits() {
  return (
    <section className="benefits" id="benefits" aria-label="Преимущества магазина">
      <div className="container benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-item" key={benefit.title}>
            <Icon name={benefit.icon} />
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Benefits
