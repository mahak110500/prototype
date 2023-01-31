import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UserProfile'; 
  
  currentURL='';

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentURL = window.location.href;   
    console.log(this.currentURL);
    
  }

  shouldShow() {
    return !(this.router.url === '/auth');

  }
}