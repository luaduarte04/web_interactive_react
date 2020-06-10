import React from 'react';

import Hero from './Hero';
import TheProduct from './TheProduct';
import ProductPreview from './ProductPreview';

export default function HomePage(props) {
  return (
    <React.Fragment>
      <Hero />
      <TheProduct />
      <ProductPreview />
    </React.Fragment>
  )
}