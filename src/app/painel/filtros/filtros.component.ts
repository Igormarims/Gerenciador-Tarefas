import { StatusEnum } from './../shereds/enums/status.enum';
import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
    console.log('toggle modal');
    
  }

  filtarTarefas() {
    console.log('filtrar tarefas ', this.filtro );
    
  }

  limparFiltro() {
    this.filtro.periodoDe = ''
    this.filtro.periodoAte = ''
    this.filtro.status = StatusEnum.TODAS;
    this.filtarTarefas();
   }

}
