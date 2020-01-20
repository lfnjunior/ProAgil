import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../_services/Evento.service';
import { Evento } from '../_models/Evento';
import { BsModalService } from 'ngx-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { defineLocale, BsLocaleService, ptBrLocale } from 'ngx-bootstrap';

Continuar na aula 76

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {
  eventosFiltrados: Evento[];
  eventos: Evento[];
  evento: Evento;
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  filtroLista: string;
  registerForm: FormGroup;

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private localeService: BsLocaleService
  ) {
    this.localeService.use('pt-br');
  }

  ngOnInit() {
    this.validation();
    this.getEventos();
  }

  get getGiltroLista(): string {
    return this.filtroLista;
  }

  set setFiltroLista(value: string) {
    this.filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  getEventos() {
    this.eventoService.getAllEventos().subscribe(
    ( eventos: Evento[]) => {
      this.eventos = eventos;
      this.eventosFiltrados = this.eventos;
    }, error => {
      console.log(error);
    }
    );
  }

  openModal(template: any) {
    this.registerForm.reset();
    template.show();
  }

  salvarAlteracoes(template: any) {
    if (this.registerForm.valid) {
      this.evento = Object.assign({}, this.registerForm.value);
      this.eventoService.postEvento(this.evento).subscribe(
        (novoEvento: Evento) => {
          console.log(novoEvento);
          template.hide();
          this.getEventos();
        }, error => {
          console.log(error);
        }
      );
    }
  }

  validation() {
    this.registerForm = this.fb.group({
      local: ['',
        Validators.required
      ],
      dataDoEvento: ['',
        Validators.required
      ],
      imagemUrl: ['',
        Validators.required
      ],
      telefone: ['',
        Validators.required
      ],
      tema: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      quantidadeDePessoas: ['',
        [
          Validators.required,
          Validators.max(12000),
        ]
      ],
    });
  }

}
