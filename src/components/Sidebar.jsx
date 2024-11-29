import React, { useState } from "react";

const Sidebar = ({ filters, onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    brand: true,
    priceRange: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <aside className="w-1/4 2xs:w-1/3 xs:w-1/3 bg-white rounded-md shadow-md p-4 border border-gray-300 shadow-gray-400">
      {/* Category Filter */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h3 className="font-medium text-gray-700">Category</h3>
          <span className="text-gray-500">
            {openSections.category ? "▲" : "▼"}
          </span>
        </div>
        {openSections.category && (
          <ul className="mt-2 space-y-2 mb-3">
            {["Electronics", "Clothing", "Home Appliances", "Modern tech"].map((category) => (
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
        )}
        {openSections.category && <a href="#" className="text-blue-500">See all</a>}
      </div>

      {/* Brand Filter */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("brand")}
        >
          <h3 className="font-medium text-gray-700">Brand</h3>
          <span className="text-gray-500">
            {openSections.brand ? "▲" : "▼"}
          </span>
        </div>
        {openSections.brand && (
          <ul className="mt-2 space-y-2 mb-3">
            {["Apple", "Samsung", "Nike", "Sony", "Lenovo"].map((brand) => (
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
        )}
        {openSections.brand && <a href="#" className="text-blue-500">See all</a>}
      </div>

      {/* Price Range Filter */}
      <div className="border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("priceRange")}
        >
          <h3 className="font-medium text-gray-700">Price Range</h3>
          <span className="text-gray-500">
            {openSections.priceRange ? "▲" : "▼"}
          </span>
        </div>
        {openSections.priceRange && (
          <div className="flex items-center gap-2 mt-2 md:flex-col md:items-start sm:flex-col sm:items-start xs:flex-col xs:items-start 2xs:flex-col 2xs:items-start">
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
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
