import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import AllProducts from '../components/AllProducts';
import PaginationBar from '../components/PaginationBar';
import { products } from '../components/products'; // Adjust the import path if needed

const Products = () => {
  // Get the searchQuery from context passed through Outlet
  const { searchQuery } = useOutletContext();

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    priceRange: [0, Infinity],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Handle filter changes (category, brand, price range)
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === 'category' || filterType === 'brand') {
        const updated = prev[filterType].includes(value)
          ? prev[filterType].filter((item) => item !== value)
          : [...prev[filterType], value];
        return { ...prev, [filterType]: updated };
      }
      if (filterType === 'priceRange') {
        return { ...prev, priceRange: value };
      }
      return prev;
    });
  };

  // Apply filters and search query to products
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      filters.category.length === 0 || filters.category.includes(product.category);
    const isBrandMatch =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const isPriceMatch =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const isSearchMatch = product.name 
      .toLowerCase()
      .includes(searchQuery.toLowerCase()); // Search by name

    return isCategoryMatch && isBrandMatch && isPriceMatch && isSearchMatch;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset current page when search query or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters]);

  return (
    <div id="/products">
        
    <p className='text-gray-500 py-3 mx-20 2xs:mx-1 xs:mx-2 sm:mx-5 md:mx-5'>Home <span className='px-1'>&#62;</span> Products </p>
      <div className="mx-20  flex gap-6 2xs:gap-2 2xs:mx-1 xs:mx-2 sm:mx-5 md:mx-5">
        {/* Sidebar for filters */}
        <Sidebar filters={filters} onFilterChange={handleFilterChange} />
        <div className="flex-1">
          {/* Display filtered and paginated products */}
          <AllProducts products={currentProducts} />
          {/* Pagination */}
          {filteredProducts.length > itemsPerPage && (
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
