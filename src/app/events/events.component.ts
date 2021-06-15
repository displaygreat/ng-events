import { Component, OnInit, Input } from '@angular/core';
// import { Event } from '../app.component';
import { EventsService, Event } from '../events.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  // events$!: Observable<Event[]>;

  events: Event[] = [];

  numInput: any = [];

  // slotsArr: any = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    // this.eventsService.getEvents$()
    //   .subscribe({
    //     next: data => this.events = data,
    //     complete: () => {
    //       for (let i = 0; i < this.events.length; i++) {
    //         this.numInput.push(0);
    //       }
    //       for (let i = 0; i < this.events.length; i++) {
    //         this.slotsArr.push(this.events[i].slots);
    //       }
    //       console.log(this.slotsArr);
    //     },
    //   })
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getEvents$()
      .subscribe({
        next: data => this.events = data,
        complete: () => {
          for (let i = 0; i < this.events.length; i++) {
            this.numInput = [];
            this.numInput.push(0);
          }
          // for (let i = 0; i < this.events.length; i++) {
          //   this.slotsArr.push(this.events[i].slots);
          // }
          // console.log(this.slotsArr);
        },
      })
  }

  onPlusClick(i: number) {
    this.numInput[i]++;
    console.log(this.numInput[i]);
    console.log(this.numInput);
  }

  onMinusClick(i: number) {
    if (this.numInput[i] > 0)
      this.numInput[i]--;
      console.log(this.numInput[i]);
      console.log(this.numInput);
  }

  createEvent() {
    this.eventsService.createEvent().subscribe(
      event => {
        console.log(event);
      }
    );
  }

  updateEvent(name: string, author: string, date: string, time: string, slots: number, i:   number) {
    const payload = {
        "id": name,
        "name": name,
        "author": author,
        "date": date,
        "time": time,
        "slots": slots - this.numInput[i],
    }
    // this.eventsService.updateEvent(payload).subscribe(
    //     event => {
    //       console.log(event);
    //     }
    // );
    this.eventsService.updateEvent(payload).subscribe({
        next: event => console.log(event),
        complete: () => this.getAllEvents(),
        }
      );
    
  }
  
}