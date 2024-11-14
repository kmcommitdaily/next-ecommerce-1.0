'use client';
import FilterCard from '../components/ui/FilterCard';
import useStoreData from '@/hooks/useStoreData';
import Carousel from '../components/widgets/Carousel';
import { title } from 'process';

const Beauty = () => {
  console.error('Beuty is not working');
  return <FilterCard title="Category" />;
};

export default Beauty;

/**
 * WHAT IS COMMON IN ALL THE FILTERCARD
 * FILTERMAPS
 * ITEM
 * INDEX
 * BUTTON
 * TITLE
 *
 * CREATE A SEPARATE COMPONENT FOR DISCOUNTS AND SERVICES
 * DIFFERENC IS SERVICE AND PROMOTIONS HAS TWO DIVS FOR PRODUCT STOCK AND DISCOUNT
 */
