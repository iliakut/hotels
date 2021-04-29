import React from 'react';
import { useParams } from 'react-router-dom';

const HotelDetailPage = () => {
  const params = useParams<{ id: string }>();
  const hotelId = params.id;
  console.log(hotelId)

  return (
    <article>
      <h1>details</h1>
    </article>
  );
};

export default HotelDetailPage;