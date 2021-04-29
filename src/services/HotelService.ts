import HttpService from './HttpService';
import { HotelInterface, RoomInterface } from '../lib/types/types';

class HotelService extends HttpService {
  constructor() {
    super('hotels');
  }

  async getHotels() {
    const data: HotelInterface[] | undefined = await this._get({});

    if (data) {
      return data;
    } else {
      return null
    }
  }

  async getHotelById(id: string) {
    const data: HotelInterface | undefined = await this._get({ additionalUrl: `/${id}` });

    if (data) {
      return data;
    } else {
      return null
    }
  }

  // when it will be a lot of room methods it is needed to create RoomsService
  async getRooms(id: string) {
    const data: RoomInterface[] | undefined = await this._get({ additionalUrl: `/${id}/rooms` });

    if (data) {
      return data;
    } else {
      return null
    }
  }
}

export default new HotelService();