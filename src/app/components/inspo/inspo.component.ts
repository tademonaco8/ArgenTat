import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppal',
  templateUrl: './inspo.component.html',
  styleUrls: ['./inspo.component.css']
})
export class InspiracionComponent implements OnInit {
  imagenes = [
    'assets/img/tatus/1.jpg',
    'assets/img/tatus/2.jpg',
    'assets/img/tatus/3.jpg',
    'assets/img/tatus/4.jpg',
    'assets/img/tatus/5.jpg',
    'assets/img/tatus/6.jpg',
    'assets/img/tatus/7.jpg',
    'assets/img/tatus/8.jpg',
    'assets/img/tatus/10.jpg',
    'assets/img/tatus/11.jpg',
    'assets/img/tatus/12.jpg',
    'assets/img/tatus/13.jpg',
    'assets/img/tatus/15.jpg',
    'assets/img/tatus/16.jpg',
    'assets/img/tatus/17.jpg',
    'assets/img/tatus/19.jpg',
    'assets/img/tatus/20.jpg',
    'assets/img/tatus/21.jpg',
    'assets/img/tatus/24.jpg',
    'assets/img/tatus/25.png',
    'assets/img/tatus/18.jpg',
    'assets/img/tatus/9.jpg',
    'assets/img/tatus/22.jpg',
    'assets/img/tatus/23.jpg',
    'assets/img/tatus/26.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
}