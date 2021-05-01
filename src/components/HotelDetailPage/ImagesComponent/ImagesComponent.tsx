import React, { FC } from 'react';
import style from './ImagesComponent.module.css';

const ImagesComponent: FC<{ images: string[] }> = (props) => {
  return (
    <div className={style.imagesContainer}>
      {
        props.images.map((src) =>
          <img
            key={src}
            src={src}
            alt="hotel"
            className={style.image}/>
        )
      }
    </div>
  );
};

export default ImagesComponent;