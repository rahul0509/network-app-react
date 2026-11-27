export function Dropdown({
  categories,
  className,
  category,
  onSelectValueChange,
}) {
  return (
    <select
      id="product-category"
      className={className}
      value={category}
      onChange={onSelectValueChange}
    >
      <option value="">All</option>
      {categories.map((categoryItem) => (
        <option key={categoryItem} value={categoryItem}>
          {categoryItem}
        </option>
      ))}
    </select>
  );
}
