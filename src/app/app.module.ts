import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular';



import { MatCommonModule } from '@angular/material/core';
import { PpalComponent } from './components/ppal/ppal.component';
import { LoginComponent } from './components/login/login.component';
import { InspiracionComponent } from './components/inspo/inspo.component';
import { FormsModule } from '@angular/forms';
import { TurnosComponent } from './components/turnos/turnos.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './http-interceptor';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    PpalComponent, 
    LoginComponent,
    InspiracionComponent,
    TurnosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatCommonModule,
    MatTooltipModule,
    MatCardModule, 
    MatIconModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
