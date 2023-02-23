import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Mariot';
  numberOfRooms = 100;
  hideRooms = false;

  roomsList: RoomList[] = [
    {
      roomType: 'Deluxe Room',
      aminities: 'Air Conditioner, Free Wifi, TV, Playground, Barbique',
      price: 800,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      checkIn: new Date('11-Nov-2021'),
      checkOut: new Date('12-Nov-2021'),
    },
    {
      roomType: 'Deluxe Room',
      aminities: 'Air Conditioner, Free Wifi, TV, Playground, Barbique',
      price: 800,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      checkIn: new Date('11-Nov-2021'),
      checkOut: new Date('12-Nov-2021'),
    },
    {
      roomType: 'Deluxe Room',
      aminities: 'Air Conditioner, Free Wifi, TV, Playground, Barbique',
      price: 800,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      checkIn: new Date('11-Nov-2021'),
      checkOut: new Date('12-Nov-2021'),
    },
  ];

  rooms: Room = {
    totalRooms: 150,
    availabelRooms: 100,
    bookedRooms: 50,
  };

  constructor() {}
  ngOnInit(): void {}
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
