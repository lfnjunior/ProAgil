import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventosFiltrados: any = [];
  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;

  FILTROLISTA = '';
  get filtroLista(): string {
    return this.FILTROLISTA;
  }
  set filtroLista(value: string) {
    this.FILTROLISTA = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }
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

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
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
