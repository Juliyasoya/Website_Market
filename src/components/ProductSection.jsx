import ProductCard from './ProductCard'

function ProductSection({
  products,
  favorites,
  onAddToCart,
  onToggleFavorite,
  onReset,
}) {
  return (
    <section className="products-section" id="new">
      <div className="container">
        <div className="section-heading">
          <h2>Популярное сейчас</h2>
          <p>
            Демонстрационные карточки можно заменить данными из CMS, базы или
            любого магазина через API.
          </p>
        </div>
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onAddToCart={onAddToCart}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Ничего не найдено</h3>
            <p>Попробуйте изменить запрос или посмотреть все товары.</p>
            <button className="button button--dark" type="button" onClick={onReset}>
              Показать всё
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductSection
