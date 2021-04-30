import React, { FC } from 'react';
import { PriceCategory } from '../../../lib/types/types';

const PriceCategoryComponent: FC<{ category: PriceCategory }> = (props) => {
  let text = '$';
  if (props.category === 'medium') {
    text = '$$'
  } else if (props.category === 'high') {
    text = '$$$';
  }
  return (
    <>
      <span> {text}</span>
    </>
  );
};

export default PriceCategoryComponent;