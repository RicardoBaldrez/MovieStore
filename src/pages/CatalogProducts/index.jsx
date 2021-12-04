import React, { useEffect, useState } from 'react'

import HeaderCatalog from '../../components/HeaderCatalog';

import { search } from '../../api/api';

import { SectionProducts, Card, CardHeader, FrontCover } from './styles';

export default function MoviesPage() {
  const [products, setProducts] = useState();
  
  useEffect(() => {
    search('/allProducts', setProducts);
  }, []);

  return (
    <>
      <HeaderCatalog />
      <SectionProducts>
        {products?.map(({ title, category, subCategory, frontCover, description  }) => {
          return(
            <Card>
              <CardHeader>
                <FrontCover src={frontCover} alt={`Picture film: ${title}`} />
              </CardHeader>
            </Card>
          )
        })}
      </SectionProducts>
    </>
  );
}