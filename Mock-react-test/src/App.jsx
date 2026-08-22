import React, { useState, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 500,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 300,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    },
    {
      id: 3,
      name: "Headphones",
      price: 100,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 50,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    },
    {
      id: 5,
      name: "Mouse",
      price: 30,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    },
    {
      id: 6,
      name: "Monitor",
      price: 200,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    },
  ]);

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  
  const total = useMemo(() => {
    return cart.reduce((sum, product) => sum + product.price, 0);
  }, [cart]);


  const addToCart = useCallback((product) => {
    setCart((oldCart) => [...oldCart, product]);
  }, []);

  
  const removeFromCart = useCallback((id) => {
    setCart((oldCart) =>
      oldCart.filter((product) => product.id !== id)
    );
  }, []);

 
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* Header */}
      <header>
        <div>
          <h1>Product Management Dashboard</h1>
          <p>Find  products</p>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

  
      <section>
        <h2>Products</h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p className="price">${product.price}</p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-products">
            No products found.
          </p>
        )}
      </section>

      {/* Cart */}
      <section className="cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <span>{cart.length} items</span>
        </div>

        {cart.length === 0 ? (
          <p className="empty">
            Your cart is empty.
          </p>
        ) : (
          <>
            {cart.map((product, index) => (
              <div className="cart-item" key={index}>

                <div className="cart-product">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span>{product.name}</span>
                </div>

                <span>${product.price}</span>

                <button
                  className="remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>

              </div>
            ))}

            <div className="cart-footer">
              <h3>Total: ${total}</h3>

              <button
                className="clear"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </section>

    </div>
  );
}

export default App;