'use client';

import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import FilterCard from '../components/ui/FilterCard';
import { useState, useEffect } from 'react';
import useStoreData from '@/hooks/useStoreData';

export interface filterItemsProps {
  [key: string]: number;
}

const filterItems = {
  Category: 10,
  Rating: 4,
  Brand: 4,
};

const Decors = () => {
  const { products } = useStoreData();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCounts, setVisibleCounts] =
    useState<filterItemsProps>(filterItems);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle product filtering when category or visible count changes
  useEffect(() => {
    const updatedFilteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;

    // Update the filtered products list whenever products or selected category change
    setFilteredProducts(updatedFilteredProducts);
  }, [selectedCategory, products]);

  // Slice the filtered products based on the visible count of categories
  const productsToDisplay = filteredProducts.slice(0, visibleCounts.Category);

  return (
    <Container className="flex space-x-2">
      <FilterCard
        title=""
        setSelectedCategory={setSelectedCategory}
        visibleCounts={visibleCounts}
        setVisibleCounts={setVisibleCounts}
      />
      <div className="grid grid-cols-4 justify-items-center gap-4">
        {productsToDisplay.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          productsToDisplay.map((item) => (
            <Card
              pick
              className="bg-white shadow-md p-4"
              product={item}
              key={item.id}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default Decors;
