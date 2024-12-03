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
  Category: 4,
  Rating: 4,
  Brand: 4,
};

const Decors = () => {
  const { products } = useStoreData();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCounts, setVisibleCounts] =
    useState<filterItemsProps>(filterItems);
  const [productByCat, setProductByCat] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  console.log('product by cat:', productByCat);
  console.log('selected cat:', selectedCategory);
  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const productByCategoryRes = await fetch(
          `https://dummyjson.com/products/category/${selectedCategory}`
        );

        console.log('response:', productByCategoryRes);

        const data = await productByCategoryRes.json();
        console.log('Fetched data:', data);
        setProductByCat(data.products || []);
      } catch (error) {
        console.error('error in fetching', error);
      }
    };
    fetchProductByCategory();
  }, [selectedCategory]);

  const productToDisplay = selectedCategory ? productByCat : products;

  return (
    <Container className="flex space-x-2">
      <FilterCard
        title=""
        setSelectedCategory={setSelectedCategory}
        visibleCounts={visibleCounts}
        setVisibleCounts={setVisibleCounts}
      />
      <div className="grid grid-cols-4 justify-items-center gap-4">
        {productToDisplay && productToDisplay.length > 0
          ? productToDisplay.map((item) => (
              <Card
                common
                className="bg-white shadow-md p-4"
                product={item}
                key={item.id}
              />
            ))
          : '...Loading '}
      </div>
    </Container>
  );
};

export default Decors;
