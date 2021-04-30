import React, { FC } from 'react';
import { RatingType } from '../../../lib/types/types';
import style from './StarRating.module.css'
import { useTranslation } from 'react-i18next';

const StarsRating: FC<{ rating: RatingType }> = (props) => {
  const { t } = useTranslation();

  return (
    <div aria-label={`${t('rating')} ${props.rating}`} className={style.rating}>
      {
        [1,2,3,4,5].map((i) => {
          const className = i <= props.rating ? style.starChecked : '';
          return (<span className={className} key={i}>☆</span>)
        })
      }
    </div>
  );
};

export default StarsRating;