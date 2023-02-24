export interface Room {
  totalRooms: number;
  availabelRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomType: string;
  aminities: string;
  price: number;
  photos: string;
  checkIn: Date;
  checkOut: Date;
  rating: number;
}

const data = [
  {
    roomType: 'Deluxe Room',
    aminities: 'Air Conditioner, Free Wifi, TV, Playground, Barbique',
    price: 800,
    photos:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    checkIn: new Date('11-Nov-2021'),
    checkOut: new Date('12-Nov-2021'),
    rating: 4.5,
  },
  {
    roomType: 'Deluxe Room',
    aminities: 'Air Conditioner, Free Wifi, TV, Playground, Barbique',
    price: 800,
    photos:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    checkIn: new Date('11-Nov-2021'),
    checkOut: new Date('12-Nov-2021'),
    rating: 4.15,
  },
  {
    roomType: 'Deluxe Room',
    aminities: 'Air Conditioner, Free Wifi, TV, Playground, Barbique',
    price: 800,
    photos:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    checkIn: new Date('11-Nov-2021'),
    checkOut: new Date('12-Nov-2021'),
    rating: 4.6,
  },
];

export { data };
