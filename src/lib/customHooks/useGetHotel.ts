import { useCallback } from "react";
import HotelService from '../../services/HotelService';
import useFetch from './useFetch';
import { useAppDispatch } from '../../app/hooks';
import { setHotels } from '../../app/hotelsSlice';

const useGetHotel = (id: string) => {
  const fetch = useCallback(() => {
    return HotelService.getHotelById(id);
  }, []);
  const { response } = useFetch(fetch);
  const dispatch = useAppDispatch();
  if (response) {
    dispatch(setHotels(response))
  }
};

export default useGetHotel;