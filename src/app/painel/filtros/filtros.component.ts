import { StatusEnum } from './../shereds/enums/status.enum';
import { Component, OnInit } from '@angular/core';
import { Status } from '../shereds/models/status.model';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  
  listaDeStatus: Status[] = StatusEnum.todosStatus()

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){

  }

  filtarTarefas() {

  }

  limparFiltro() {
    
  }

}
