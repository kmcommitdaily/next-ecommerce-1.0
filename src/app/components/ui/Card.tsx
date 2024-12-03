import { ReactNode } from 'react';
import Image from 'next/image';
interface CardProps {
  children?: ReactNode;
  className?: string;
  pick?: boolean;
  common?: boolean;
  product: {
    images: string[];
    name: string;
    price: number;
    rating: number;
    brand?: string;
    stock?: number;
  };
}

const Card = ({ children, className, pick, common, product }: CardProps) => {
  if (pick) {
    return (
      <div className={`max-w-max min-w-full max-h-96 ${className}`}>
        <>
          <Image
            className="h-48 w-48 "
            src={`${product.images[0]}`} // Ensure this exists
            alt={product.name || 'Product Image'}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
          <h4>{product.name || ''}</h4>
          <div>{product.rating}</div>
          <div>{product.price}</div>
          <div>{product.brand}</div>
        </>
      </div>
    );
  } else if (common) {
    return (
      <div className={`max-w-max min-w-full max-h-max ${className}`}>
        {/** ADD TAGS HERE FOR POPULAR PRODUCTS */}
        <>
          <Image
            className="h-48 w-48"
            src={`${product.images[0]}`} // Ensure this exists
            alt={product.name || 'Product Image'}
            width={300}
            height={300}
            layout="fixed"
            objectFit="contain"
          />
          <h4>{product.name}</h4>
          <span>{product.rating}</span>
          <div>{product.price}</div>
          <div>{product.brand}</div>
          {/** MAKE BUTTON DYNAMIC AS WELL AS THE MORE TO THIS */}
          <button className="mr-2 bg-red-300">add button</button>
          <span>More to this </span>
        </>
      </div>
    );
  }
};

export default Card;
