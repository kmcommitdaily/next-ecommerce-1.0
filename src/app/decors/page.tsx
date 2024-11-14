'use client';

import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Image from 'next/image';
import Tags from '../components/ui/Tags';
import useStoreData from '@/hooks/useStoreData';

const Decors = () => {
  const { products } = useStoreData();

  return (
    <Container className="  grid grid-cols-5 justify-items-center gap-4  ">
      {products.map((item) => {
        // console.log(item.images);
        return (
          <Card
            pick
            className="bg-green-200 p-4 "
            product={item}
            key={item.id}></Card>
        );
      })}
    </Container>
  );
};

export default Decors;
