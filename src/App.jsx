import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import ProductSection from './components/ProductSection'
import Benefits from './components/Benefits'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { categories, products } from './data/catalog'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Все товары')
  const [cartCount, setCartCount] = useState(0)
  const [favorites, setFavorites] = useState([])

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'Все товары' || product.category === activeCategory
      const matchesQuery =
        !normalizedQuery ||
        `${product.name} ${product.category}`.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const toggleFavorite = (productId) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }

  return (
    <div className="app-shell">
      <Header
        cartCount={cartCount}
        favoriteCount={favorites.length}
        query={query}
        onQueryChange={setQuery}
      />
      <main>
        <Hero />
        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <ProductSection
          products={visibleProducts}
          favorites={favorites}
          onAddToCart={() => setCartCount((count) => count + 1)}
          onToggleFavorite={toggleFavorite}
          onReset={() => {
            setQuery('')
            setActiveCategory('Все товары')
          }}
        />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
