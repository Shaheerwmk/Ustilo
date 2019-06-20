import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}
  
  routed:boolean=true;
  title = 'Ustilo';

  routeToSignUp(){
    this.routed = false;
    this.router.navigate(['/sign-up'])
  }

  routeToSignIn(){
    this.routed = false;
    this.router.navigate(['/sign-in'])
  }

  routeToUser(){
    this.routed = false;
    this.router.navigate(['/user'])
  }
}
