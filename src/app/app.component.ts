import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArgenTat';
  public loggedIn: boolean = false;
  isAuthenticated: boolean = false;
  
  constructor( private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(authenticated => {
      this.isAuthenticated = authenticated;
    });
  }



  logout(){
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
