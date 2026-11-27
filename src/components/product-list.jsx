import "./product-list.css";
import { SearchBox, SearchResult } from "./search-box.jsx";
import { Dropdown } from "./dropdown.jsx";
import { useState } from "react";
import { Popup } from "./popup.jsx";
import { AddProductForm } from "./add-product.jsx";

export function ProductList({ products, onAddProduct }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      (category === "" || product.category === category.trim()) &&
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(normalizedQuery),
  );

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <div className="product-controls">
        <Dropdown
          className="product-categories"
          categories={categories}
          category={category}
          onSelectValueChange={(event) => setCategory(event.target.value)}
        />
        <SearchBox
          searchQuery={searchQuery}
          onInputValueChange={(event) => setSearchQuery(event.target.value)}
        />
        <button
          className="add-product-button"
          onClick={() => setIsPopupOpen(true)}
        >
          Add Product
        </button>
        <Popup isOpen={isPopupOpen} isClose={() => setIsPopupOpen(false)}>
          <AddProductForm
            categories={categories}
            onAddProduct={(productDetails) => {
              onAddProduct(productDetails);
              setIsPopupOpen(false);
            }}
          />
        </Popup>
      </div>
      {filteredProducts.length > 0 ? (
        <section className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <SearchResult searchQuery={searchQuery} />
      )}
    </>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>In Stock: {product.inStock ? "In stock" : "Out of stock"}</p>
    </article>
  );
}
