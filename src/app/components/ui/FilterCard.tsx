'use client';

import { useState } from 'react';
import { CategoryProps } from '@/hooks/useStoreData';
import useStoreData from '@/hooks/useStoreData';
import { filterItemsProps } from '@/app/decors/page';

// PROPS
// TITLE
// CHILDREN
// FILTER CHILDREN TO GET ONLY THE FIRST 4 OR MAX IS 4
// ADD MORE BUTTON
// CAN DESIGN IF THE BUTTON BORDER IS VISIBLE

interface FilterCardProps {
  title: string;
  setSelectedCategory: (categoryId: string | null) => void;
  visibleCounts: filterItemsProps;
  setVisibleCounts: React.Dispatch<React.SetStateAction<filterItemsProps>>;
}

const FilterCard = ({
  title,
  setSelectedCategory,
  visibleCounts,
  setVisibleCounts,
}: FilterCardProps) => {
  const { categories, products } = useStoreData();

  const showMoreItems = (section: string, totalCount: number) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [section]: totalCount,
    }));
  };

  // when a categroy was clicked then find yhe id of selected category and display it on card

  const FilterItems = ['Category', 'Rating', 'Brand'];
  // console.log('Categories:', categories); // Log the categories data structure

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
                      // console.log('Category:', category.name);

                      return (
                        <div key={category.id}>
                          <div
                            className="cursor-pointer hover:bg-blue-300"
                            onClick={() => {
                              console.log('Category ID:', category.id);
                              setSelectedCategory(category.slug);
                            }}>
                            {category.name}
                          </div>
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
              <li
                className="w-[250px] p-5 mb-5 border-b-2 border-gray-600 inset-0 border-opacity-30  "
                key={index}>
                <div>
                  <div className="font-black">{item}</div>
                  {products.slice(0, visibleCounts.Rating).map((product) => (
                    <div key={product.id}>{product.rating}</div>
                  ))}
                </div>
                {visibleCounts.Rating < products.length && (
                  <button
                    className="font-bold font-medium"
                    onClick={() => {
                      showMoreItems('Rating', products.length);
                    }}>
                    ...show more
                  </button>
                )}
              </li>
            );
          } else if (item === 'Brand') {
            return (
              <li
                className="w-[250px] p-5 mb-5 border-b-2  border-gray-600 inset-0 border-opacity-30  "
                key={index}>
                <div>
                  <div className="font-black">{item}</div>
                  {products.slice(0, visibleCounts.Brand).map((product) => (
                    <div key={product.id}>{product.brand}</div>
                  ))}
                </div>
                {visibleCounts.Brand < products.length && (
                  <button
                    className="font-bold font-medium"
                    onClick={() => {
                      showMoreItems('Brand', products.length);
                    }}>
                    ...show more
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
