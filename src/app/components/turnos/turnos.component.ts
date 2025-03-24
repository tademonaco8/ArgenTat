import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  @ViewChild('calendar', { static: false }) calendarRef!: ElementRef;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    aspectRatio: 1.35,
    events: [],  // Inicializamos como un arreglo vacío
    dateClick: this.handleDateClick.bind(this), // Asegúrate de que el manejador de eventos esté correctamente vinculado
  };

  showTurnoForm = false;
  selectedDate: string = '';
  selectedTime: string = '';
  name: string = '';
  
  constructor() { }

  ngOnInit(): void {}

  handleDateClick(arg: any) {
    // Mostrar el formulario de selección de hora cuando se hace click en una fecha
    this.selectedDate = arg.dateStr;  // Guardar la fecha seleccionada
    this.showTurnoForm = true;
  }

  saveTurno() {
    const turnoDate = `${this.selectedDate}T${this.selectedTime}:00`;
  
    const newEvent = { title: 'Turno '+ this.name, date: turnoDate };
  
    if (Array.isArray(this.calendarOptions.events)) {
      this.calendarOptions.events.push(newEvent);
      console.log('Eventos después de agregar:', this.calendarOptions.events); // Verifica los eventos
    }
  
    // Refresca el calendario
    if (this.calendarRef && this.calendarRef.nativeElement) {
      const calendarApi = this.calendarRef.nativeElement.getApi();
      calendarApi.refetchEvents();
    }
  
    this.showTurnoForm = false;
    this.selectedTime = '';
    this.name = '';
  }
  
  

  cancelTurno() {
    this.showTurnoForm = false;
    this.selectedTime = '';
  }
}
