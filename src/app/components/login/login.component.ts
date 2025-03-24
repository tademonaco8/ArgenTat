import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EstadoService } from '../../services/estado.service';
import { AuthService } from '../../auth.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-ppal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userValue:string ='';
  pwValue:string ='';
  loggedIn: boolean = false;

  constructor(private estadoService: EstadoService,
    private appRouter: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.estadoService.loggedIn$.subscribe(loggeado =>{
      debugger;
      this.loggedIn = loggeado;
    })

  }

  // iniciarSesion(event:any){
  //   debugger;
  //   if (this.userValue == this.pwValue) {
  //     this.estadoService.actualizarValor(true);
  //     this.appRouter.navigate(['']);
  //   }
  // }

  login() {
    this.authService.login(this.userValue, this.pwValue).subscribe(response => {
      this.authService.setToken(response.token);
      // Redirige al usuario después del inicio de sesión exitoso
      this.appRouter.navigate(['']);
    });
  }

}