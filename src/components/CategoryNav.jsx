function CategoryNav({ categories, activeCategory, onSelect }) {
  return (
    <section className="category-section" id="catalog">
      <div className="container">
        <div className="section-heading">
          <h2>Выберите категорию</h2>
          <p>Базовая структура готова к подключению реальных разделов каталога.</p>
        </div>
        <div className="category-grid" role="list">
          {categories.map((category) => (
            <button
              className={`category-card ${
                activeCategory === category.name ? 'is-active' : ''
              }`}
              type="button"
              key={category.name}
              onClick={() => onSelect(category.name)}
              aria-pressed={activeCategory === category.name}
            >
              <span className="category-icon" aria-hidden="true">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryNav
