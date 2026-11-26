const fruits = ["Apple", "Mango", "Pear"];
const vegetables = ["Carrot", "Broccoli", "Spinach"];

export function List({ isFruitList }) {
  const items = isFruitList ? fruits : vegetables;

  return (
    <ul>
      {items.map((item) => (
        <li className="fruit-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

