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
            <div className=" mx-20 mt-6 flex gap-6 2xs:gap-2 2xs:mx-1 xs:mx-2 sm:mx-5 md:mx-5">
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
            <section class="mt-6 bg-gray-300 xs:mt-2 sm:mt-2 xs:p-0   2xs:mt-3 2xs:p-0  ">
            <div class="text-center py-10">
                <h1 class="text-2xl font-bold">Subscribe on our newsletter</h1>
                <p class="text-gray-600">Get daily news on upcoming offers from many suppliers all over the world</p>
                <div class="mt-5">
                    <div class="">
                        <i class="fa-regular fa-envelope translate-x-8 text-gray-400"></i>
                        <input 
                          type="text" 
                          placeholder="Email" 
                          class="pl-10 py-2 border border-gray-300 w-72 rounded-md"
                        />
                        <button class="bg-blue-600 text-white py-2 px-4 rounded-md ml-1">Subscribe</button>
                      </div>
                </div>
            </div>
            
        </section>
        </div>
    );
};

export default Products;
