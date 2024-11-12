'use client';

import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Image from 'next/image';
import Tags from '../components/ui/Tags';
import useStoreData from '@/hooks/useStoreData';

const Store = () => {
  const { products } = useStoreData();

  return (
    <Container className="  grid grid-cols-5 justify-items-center gap-4  ">
      {products.map((item) => {
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
          </Card>
        );
      })}
    </Container>
  );
};

export default Store;
