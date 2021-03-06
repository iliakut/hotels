import { useCallback } from "react";
import HotelService from '../../services/HotelService';
import useFetch from './useFetch';
import { useAppDispatch } from '../../app/hooks';
import { setCurrentHotel } from '../../app/hotelsSlice';

const useGetHotel = (id: string) => {
  const fetch = useCallback(() => {
    return HotelService.getHotelById(id);
  }, [id]);
  const { response } = useFetch(fetch);
  const dispatch = useAppDispatch();
  if (response) {
    dispatch(setCurrentHotel(response))
  }
};

export default useGetHotel;