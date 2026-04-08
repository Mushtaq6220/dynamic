"use client";

export default function FilterBar({ query, onQueryChange }) {
  return (
    <div className="filter-bar">
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search packages by name or route"
      />
    </div>
  );
}
