import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shereds/models/tarefa.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
   tarefas: Tarefa [] = [ new Tarefa('asd','asd')];
 
  constructor() { }

  ngOnInit(): void {
  }

}
