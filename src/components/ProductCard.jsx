import Icon from './Icon'

const formatPrice = (price) =>
  new Intl.NumberFormat('ru-RU').format(price).replace(/\u00a0/g, ' ')

function ProductCard({ product, isFavorite, onAddToCart, onToggleFavorite }) {
  return (
    <article className="product-card">
      <div className="product-media">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button
          className={`icon-button favorite-button ${isFavorite ? 'is-active' : ''}`}
          type="button"
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          aria-pressed={isFavorite}
        >
          <Icon name="heart" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <span className="product-price">{formatPrice(product.price)} ₽</span>
      </div>
      <button className="add-button" type="button" onClick={onAddToCart}>
        Добавить в корзину
      </button>
    </article>
  )
}

export default ProductCard
