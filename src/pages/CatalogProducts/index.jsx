import React, { useEffect, useState } from 'react'

import HeaderCatalog from '../../components/HeaderCatalog';

import { search } from '../../api/api';

export default function MoviesPage() {
  const [products, setProducts] = useState();
  console.log(products);
  
  useEffect(() => {
    search('/allProducts', setProducts);
  }, []);

  return (
    <>
      <HeaderCatalog />
      {products?.map(({ frontCover }) => {
        return(
          <img src={frontCover} alt="" />
        )
      })}
    </>
  );
}