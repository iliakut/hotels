type amenitiesType = 'free_parking' | 'free_wifi' | 'gym' | 'pets' | 'pool' | 'restaurant' | 'spa';

type ratingType = 1 | 2| 3 | 4 | 5

export interface HotelInterface {
  id: string
  name: string
  description: string
  distance_to_venue: number
  rating: ratingType
  price_category: 'low' | 'medium' | 'high'
  amenities: amenitiesType[]
  images: string[]
  rooms: RoomInterface[]
}

export interface RoomInterface {
  id: string
  name: string
  description: string
  max_occupancy: 1 | 2 | 3 | 4
  rating: ratingType
  price_in_usd: number
  available: boolean
}
