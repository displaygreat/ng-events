import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTickets - Tickets Engine';
  organization = "HackaLearn";
  toggle = false;
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe((resp: any) => this.message = resp.text);
  }
  
  toggleEvents () {
    this.toggle = !this.toggle;
    this.getAllEvents();
  }

  async getAllEvents(){
    const response = await fetch("/api/getAllEvents");
    const payload = await response.json();     
    console.dir(payload);
  }
}