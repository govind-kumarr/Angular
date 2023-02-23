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
}
