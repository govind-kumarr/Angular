import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { data, Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit {
  hotelName = 'Mariot';
  numberOfRooms = 100;
  hideRooms = false;

  title = 'I am your parent';

  roomsList: RoomList[] = [];

  rooms: Room = {
    totalRooms: 150,
    availabelRooms: 100,
    bookedRooms: 50,
  };

  selectedRoom!: RoomList;

  constructor() {}

  ngOnInit(): void {
    this.roomsList = data;
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title =
      this.title === 'I am not your parent'
        ? 'I am your parent'
        : 'I am not your parent';
  }

  addRoom() {
    const room: RoomList = {
      roomType: 'Luxury',
      aminities: 'AC Fridge Kitchen parking',
      price: 1399,
      photos:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      checkIn: new Date('24-Feb-2023'),
      checkOut: new Date('24-Feb-2023'),
      rating: 4.12,
    };
    this.roomsList = [...this.roomsList, room];
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(this.selectedRoom);
  }
}
