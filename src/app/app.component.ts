import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserProfile';

  constructor(private router:Router){}

  shouldShow(){
    return !(this.router.url === '/auth');
  }
}
