import "./App.css";
import { useState } from "react";
// import { useState } from "react";
// import { List } from "./components/List";
// import { Welcome, WelcomeMessage } from "./components/Welcome";
import { ProductList } from "./components/product-list";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Notebook",
      category: "Stationery",
      price: 5,
      inStock: true,
    },
    {
      id: 2,
      name: "Pen set",
      category: "Stationery",
      price: 3,
      inStock: false,
    },
    {
      id: 3,
      name: "Water bottle",
      category: "Accessories",
      price: 12,
      inStock: true,
    },
  ]);

  function handleAddProduct(productDetails) {
    setProducts((currentProducts) => {
      const nextId =
        currentProducts.reduce(
          (highestId, product) => Math.max(highestId, product.id),
          0,
        ) + 1;

      return [
        ...currentProducts,
        { ...productDetails, id: nextId, inStock: true },
      ];
    });
  }

  return (
    <main>
      <h1>Welcome to React</h1>
      <ProductList products={products} onAddProduct={handleAddProduct} />
    </main>
  );
  // this.App = learn();
}

// function learn() {
//   const [isChecked, setIsChecked] = useState(true);
//   return (
//     <>
//       <label className="switch">
//         <input
//           type="checkbox"
//           checked={isChecked}
//           aria-label="Toggle setting"
//           onChange={() => setIsChecked(!isChecked)}
//         />
//         <span className="slider round"></span>
//       </label>
//       <Welcome />
//       <WelcomeMessage message="This is a simple React application." />
//       <List isFruitList={isChecked} />
//     </>
//   );
// }
export default App;
