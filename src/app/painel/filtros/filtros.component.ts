import { StatusEnum } from './../shereds/enums/status.enum';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Status } from '../shereds/models/status.model';
import { Filtro } from '../shereds/models/filtro.model';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  
  filtro: Filtro = new Filtro();
  listaDeStatus: Status[] = StatusEnum.todosStatus()
  modalAberto: boolean = false;
  @Output('filtarTarefas')  filtrarTarefasEmitter: EventEmitter<Filtro> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
     this.modalAberto = !this.modalAberto;
  }

  filtrarTarefas() {
    this.filtrarTarefasEmitter.emit(this.filtro)
    this.modalAberto = false;
  }

  limparFiltro() {
    this.filtro.periodoDe = ''
    this.filtro.periodoAte = ''
    this.filtro.status = StatusEnum.TODAS;
    this.filtrarTarefas();
   }

}
