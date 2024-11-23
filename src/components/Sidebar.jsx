import React from "react";

const Sidebar = ({ filters, onFilterChange }) => {
  return (
    <aside className="w-1/4 bg-white rounded-md shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700">Category</h3>
        <ul className="mt-2 space-y-2">
          {["Electronics", "Clothing", "Home Appliances"].map((category) => (
            <li key={category}>
              <input
                type="checkbox"
                id={category}
                checked={filters.category.includes(category)}
                onChange={() => onFilterChange("category", category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700">Price Range</h3>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange[0]}
            onChange={(e) =>
              onFilterChange("priceRange", [
                parseInt(e.target.value) || 0,
                filters.priceRange[1],
              ])
            }
            className="border rounded-md px-2 py-1 w-20"
          />
          <span>to</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange[1] === Infinity ? "" : filters.priceRange[1]}
            onChange={(e) =>
              onFilterChange("priceRange", [
                filters.priceRange[0],
                parseInt(e.target.value) || Infinity,
              ])
            }
            className="border rounded-md px-2 py-1 w-20"
          />
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-medium text-gray-700">Brand</h3>
        <ul className="mt-2 space-y-2">
          {["Apple", "Samsung", "Sony"].map((brand) => (
            <li key={brand}>
              <input
                type="checkbox"
                id={brand}
                checked={filters.brand.includes(brand)}
                onChange={() => onFilterChange("brand", brand)}
                className="mr-2"
              />
              <label htmlFor={brand}>{brand}</label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
