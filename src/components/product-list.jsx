import "./product-list.css";

export function ProductList({ products }) {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
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


