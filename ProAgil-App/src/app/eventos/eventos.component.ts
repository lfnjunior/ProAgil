import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any;
  /*eventos: any = [
    {
      eventoId: 1,
      tema: 'Angular',
      local: 'Ponta Grossa'
    },
    {
      eventoId: 2,
      tema: '.NET',
      local: 'Ponta Grossa'
    },
    {
      eventoId: 3,
      tema: 'Angular e .NET',
      local: 'Ponta Grossa'
    }
  ];*/
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get('http://localhost:5000/Evento').subscribe( response => {
      this.eventos = response;
    }, error => {
      console.log(error);
    }
    );
  }

}
