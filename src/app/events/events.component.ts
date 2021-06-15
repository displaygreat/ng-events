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
  // @Input()
  // event!: Event;

  events$!: Observable<Event[]>;

  // eventItems: Event[] = [];

  events: Event[] = [];

  buyNumInput: any = [];

  slotsArr: any = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents$()
      .subscribe({
        next: data => this.events = data,
        complete: () => {
          for (let i = 0; i < this.events.length; i++) {
            this.buyNumInput.push(0);
          }
          for (let i = 0; i < this.events.length; i++) {
            this.slotsArr.push(this.events[i].slots);
          }
          console.log(this.slotsArr);
        },
      })
  }

  onPlusClick(i: number) {
    this.buyNumInput[i]++;
    console.log(this.buyNumInput[i]);
    console.log(this.buyNumInput);
  }

  onMinusClick(i: number) {
    if (this.buyNumInput[i] > 0)
      this.buyNumInput[i]--;
      console.log(this.buyNumInput[i]);
      console.log(this.buyNumInput);
  }

  // async update(name: string, author: string, date: string, time: string){
  //   const payload = {
  //     "id": name,
  //     "name": name,
  //     "author": author,
  //     "date": date,
  //     "time": time,
  //     "slots": 12,
  //   }

  //   const response = await fetch(`/api/updateEvents`, {
  //     method: 'POST',
  //     body: JSON.stringify(payload)
  //   });

  //   const responsePayload = await response.json();
  //   console.dir(responsePayload);
  //   console.log('update');
  // }

  createEvent() {
  this.eventsService.createEvent().subscribe(
      event => {
        console.log(event);
      }
    );
  }

  addEvent(name: string, author: string, date: string, time: string, slots: number, i: number) {
    const payload = {
        "id": name,
        "name": name,
        "author": author,
        "date": date,
        "time": time,
        "slots": slots - this.buyNumInput[i],
    }
    this.eventsService.addEvent(payload).subscribe(
        event => {
          console.log(event);
        }
    );
  }
  
}