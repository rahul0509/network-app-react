import { useState } from "react";
import "./add-product.css";

export function AddProductForm({ categories, onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!productName.trim()) {
      setErrorMessage("Product name is required.");
      return;
    }

    if (!categoryName.trim() || !Number.isFinite(Number(productPrice))) {
      setErrorMessage("Product Category is required.");
      return;
    }

    setErrorMessage("");
    onAddProduct({
      name: productName.trim(),
      category: categoryName,
      price: Number(productPrice),
    });
    setProductName("");
    setCategoryName("");
    setProductPrice("");
  }
  return (
    <>
      <h2> Add Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        {errorMessage && (
          <p className="form-error" role="alert">
            {errorMessage}
          </p>
        )}
        <input
          id="product-name"
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(event) => {
            setProductName(event.target.value);
            setErrorMessage("");
          }}
        />

        <select
          id="product-category"
          value={categoryName}
          onChange={(event) => {
            setCategoryName(event.target.value);
            setErrorMessage("");
          }}
        >
          <option value="">Choose a category</option>
          {categories.map((categoryItem) => (
            <option key={categoryItem} value={categoryItem}>
              {categoryItem}
            </option>
          ))}
        </select>
        <input
          id="product-price"
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(event) => {
            setProductPrice(event.target.value);
            setErrorMessage("");
          }}
        />

        <button className="submit-btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
