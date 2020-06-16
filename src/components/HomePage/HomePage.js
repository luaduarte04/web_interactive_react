import React from 'react';

import Hero from './Hero';
import TheProduct from './TheProduct';
import ProductPreview from './ProductPreview';

export default function HomePage(props) {
  return (
    <React.Fragment>
      <Hero user={props.user} />
      <TheProduct />
      <ProductPreview />
    </React.Fragment>
  )
}