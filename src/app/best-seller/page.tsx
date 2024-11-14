const BestSeller = () => {
  const FilterItems = ['Category', 'Rating', 'Brand', 'Service & Promotions'];

  return (
    <ul>
      {FilterItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BestSeller;
