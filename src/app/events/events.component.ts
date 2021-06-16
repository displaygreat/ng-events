import { Component, OnInit } from '@angular/core';
import { EventsService, Event } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  numInput: any = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventsService.getEvents$()
      .subscribe({
        next: data => this.events = data,
        complete: () => {
          this.numInput = [];
          for (let i = 0; i < this.events.length; i++) {
            this.numInput.push(0);
          }
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
    
    this.eventsService.updateEvent(payload).subscribe({
      next: event => console.log(event),
      complete: () => {
        alert(`You added ${this.numInput[i]} tickets`)
        this.getAllEvents()
      },
    });
  }
  
}