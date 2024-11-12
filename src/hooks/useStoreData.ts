import { useEffect, useState } from 'react';

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  stock: number;
  tags: string[];
  category?: string;
}

interface ResponseProps {
  products: ProductProps[];
}

export interface CategoryProps {
  slug?: string;
  name?: string;
  url?: string;
}

const useStoreData = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const productsResponse = await fetch('https://dummyjson.com/products');
        const categoriesResponse = await fetch(
          'https://dummyjson.com/products/categories'
        );
        const productsData = (await productsResponse.json()) as ResponseProps;
        const categoriesData = await categoriesResponse.json();

        setProducts(productsData.products);
        setCategories(categoriesData);
      } catch (error) {
        console.error('error in fetching', error);
      }
    };
    fetchStoreData();
  });

  return { categories, products };
};

export default useStoreData;
