import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit, OnChanges,DoCheck {
  @Input() roomList: RoomList[] = [];
  @Input() title: string = '';
  @Output() roomSelected = new EventEmitter<RoomList>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  selectRoom(room: RoomList) {
    this.roomSelected.emit(room);
  }

  ngDoCheck(): void {
    console.log("on changes called")
  }
}
