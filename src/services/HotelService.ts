import HttpService from './HttpService';
import { HotelInterface } from '../lib/types/types';

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
}

export default new HotelService();