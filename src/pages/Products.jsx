import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AllProducts from '../components/AllProducts';
import Pagination from '../components/pagination';
import { products } from '../components/products';

const Products = () => {
    const [filters, setFilters] = useState({
        category: [],
        brand: [],
        priceRange: [0, Infinity]
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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

    // Filter products based on the selected filters
    const filteredProducts = products.filter((product) => {
        const isCategoryMatch =
            filters.category.length === 0 || filters.category.includes(product.category);
        const isBrandMatch =
            filters.brand.length === 0 || filters.brand.includes(product.brand);
        const isPriceMatch =
            product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
        return isCategoryMatch && isBrandMatch && isPriceMatch;
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

    return (
        <div id="/products">
            <div className="container mx-auto mt-6 flex gap-6">
                <Sidebar filters={filters} onFilterChange={handleFilterChange} />
                <div className="flex-1">
                    <AllProducts products={currentProducts} />
                    {filteredProducts.length > itemsPerPage && (
                        <Pagination
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
