'use client';
import { useEffect, useState } from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Image from 'next/image';
import Tags from '../components/ui/Tags';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  stock: number;
  tags: string[];
}

interface ResponseProps {
  products: ProductProps[];
}

const Store = () => {
  const [product, setProduct] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = (await response.json()) as ResponseProps;
        setProduct(data.products);
        console.log(product);
      } catch (error) {
        console.error('error in fetching', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="  grid grid-cols-5 justify-items-center gap-4  ">
      {product.map((item) => {
        console.log(item.id);
        return (
          <Card className="bg-green-200 p-4 " key={item.id}>
            <Image
              className="h-48 w-48"
              src={`${item.images[0]}`}
              alt={item.title}
              width={300}
              height={300}
              layout="fixed"
              objectFit="contain"
            />
            <h4> {item.title}</h4>
            <div>{item.price}</div>
            <span>{item.stock}</span>
            {item.tags.map((tag, i) => (
              <Tags className="bg-blue-200 rounded-lg mr-1" key={i}>
                {tag}
              </Tags>
            ))}
            {/* <Tags className="bg-blue-50">{item.tags.join(', ')}</Tags> */}
            {/* <div>{item.tags.join(', ')}</div> */}
          </Card>
        );
      })}
    </Container>
  );
};

export default Store;
