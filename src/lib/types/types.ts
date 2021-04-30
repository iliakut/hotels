type amenitiesType = 'free_parking' | 'free_wifi' | 'gym' | 'pets' | 'pool' | 'restaurant' | 'spa';

export type RatingType = 0 | 1 | 2| 3 | 4 | 5

export type PriceCategory = 'low' | 'medium' | 'high'

export interface HotelInterface {
  id: string
  name: string
  description: string
  distance_to_venue: number
  rating: RatingType
  price_category: PriceCategory
  amenities: amenitiesType[]
  images: string[]
  rooms: string[]
}

export interface RoomInterface {
  id: string
  name: string
  description: string
  max_occupancy: 1 | 2 | 3 | 4
  rating: RatingType
  price_in_usd: number
  available: boolean
}
