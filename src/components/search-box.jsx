export function SearchBox({ searchQuery, onInputValueChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="search-bar"
      value={searchQuery}
      onChange={onInputValueChange}
    />
  );
}

export function SearchResult({ searchQuery }) {
  return <p>Searching for: {searchQuery || "nothing yet"}</p>;
}
