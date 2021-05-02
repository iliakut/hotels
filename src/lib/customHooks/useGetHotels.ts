import { useCallback, useEffect } from "react";
import HotelService from '../../services/HotelService';
import useFetch from './useFetch';
import { useAppDispatch } from '../../app/hooks';
import { setHotels } from '../../app/hotelsSlice';

const useGetHotels = () => {
  const fetch = useCallback(() => {
    return HotelService.getHotels();
  }, []);
  const { response } = useFetch(fetch);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (response) {
      dispatch(setHotels(response))
    }
  }, [dispatch, response])
};

export default useGetHotels;