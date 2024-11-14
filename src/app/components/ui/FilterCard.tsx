'use client';

import { useState } from 'react';
import { CategoryProps } from '@/hooks/useStoreData';
import useStoreData from '@/hooks/useStoreData';

// PROPS
// TITLE
// CHILDREN
// FILTER CHILDREN TO GET ONLY THE FIRST 4 OR MAX IS 4
// ADD MORE BUTTON
// CAN DESIGN IF THE BUTTON BORDER IS VISIBLE

interface FilterCardProps {
  title: string;
}

interface filterItemsProps {
  [key: string]: number;
}

const filterItems = {
  Category: 4,
  Rating: 4,
  Brand: 4,
};

const FilterCard = ({ title }: FilterCardProps) => {
  const { categories, products } = useStoreData();
  const [visibleCounts, setVisibleCounts] =
    useState<filterItemsProps>(filterItems);

  const showMoreItems = (section: string, totalCount: number) => {
    setVisibleCounts((prev) => ({
      ...prev, // Spread the previous state to keep other sections unchanged
      [section]: totalCount, // Update the section that was clicked
    }));
  };

  const FilterItems = ['Category', 'Rating', 'Brand'];

  return (
    <div>
      <ul>
        {FilterItems.map((item, index) => {
          if (item === 'Category') {
            return (
              <li
                className="w-[250px] p-5 mb-5 border-b-2 border-gray-600 inset-0 border-opacity-30  "
                key={index}>
                <div>
                  <div className="font-black">{item}</div>
                  {categories
                    .slice(0, visibleCounts.Category)
                    .map((category) => {
                      console.log('Category:', category.name);
                      // const itemsUnderCategory = products.filter((product) => {
                      //   console.log('Product Category:', product.category);
                      //   return (
                      //     product.category?.trim().toLowerCase() ===
                      //     category.name.trim().toLowerCase()
                      //   );
                      // }).length;

                      return (
                        <div key={category.id}>
                          <div>{category.name}</div>
                          {/* <span className="ml-9">{`(${itemsUnderCategory})`}</span> */}
                        </div>
                      );
                    })}
                </div>
                {visibleCounts.Category < categories.length && (
                  <button
                    className="font-bold font-medium"
                    onClick={() => {
                      showMoreItems('Category', categories.length);
                    }}>
                    ...show more
                  </button>
                )}
              </li>
            );
          } else if (item === 'Rating') {
            return (
              <li key={index}>
                <div>
                  <div>{item}</div>
                  {products.slice(0, visibleCounts.Rating).map((product) => (
                    <div key={product.id}>{product.rating}</div>
                  ))}
                </div>
                {visibleCounts.Rating < products.length && (
                  <button
                    onClick={() => {
                      showMoreItems('Rating', products.length);
                    }}>
                    Show more
                  </button>
                )}
              </li>
            );
          } else if (item === 'Brand') {
            return (
              <li key={index}>
                <div>
                  <div>{item}</div>
                  {products.slice(0, visibleCounts.Brand).map((product) => (
                    <div key={product.id}>{product.brand}</div>
                  ))}
                </div>
                {visibleCounts.Brand < products.length && (
                  <button
                    onClick={() => {
                      showMoreItems('Brand', products.length);
                    }}>
                    Show more
                  </button>
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default FilterCard;
