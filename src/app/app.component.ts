import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Event {
  id: number;
  name: string;
  author: string;
  date: string;
  time: string;
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGTickets - Tickets Engine';
  organization = "HackaLearn";
  toggle = false;
  events: Event[] = [
    {id: 1, name: 'HackaLearn', author: 'AngularNights', date: "01/07/21", time: "08:00", counter: 0},
    {id: 2, name: 'HackaLive', author: 'AngularNights', date: "02/07/21", time: "12:00", counter: 0},
    {id: 3, name: 'HackaJoy', author: 'AngularNights', date: "03/07/21", time: "16:00", counter: 0},
  ]
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe((resp: any) => this.message = resp.text);
  }
  
  toggleEvents () {
    this.toggle = !this.toggle;
  }
  // async getAllEvents(){
  //   const response = await fetch("/api/getAllEvents");
  //   const payload = await response.json();     
  //   console.dir(payload);
  // }
}