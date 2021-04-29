import { useCallback } from "react";
import HotelService from '../../services/HotelService';
import useFetch from './useFetch';
import { useAppDispatch } from '../../app/hooks';
import { setRooms } from '../../app/roomsSlice';

const useGetHotel = (id: string) => {
  const fetch = useCallback(() => {
    return HotelService.getRooms(id);
  }, [id]);
  const { response } = useFetch(fetch);
  const dispatch = useAppDispatch();
  if (response) {
    dispatch(setRooms(response))
  }
};

export default useGetHotel;