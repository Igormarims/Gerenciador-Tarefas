import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shereds/models/tarefa.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
   tarefas?: Tarefa[] = [];
 
  constructor() { }

  ngOnInit(): void {
    const tarefa = new Tarefa('teste', '02-01-2023')
    tarefa.dataConclusao = '2023-01-30'
    this.tarefas?.push(tarefa)

    const tarefa2 = new Tarefa('teste', '02-01-2023')
    // tarefa.dataConclusao = '2023-01-30'
    this.tarefas?.push(tarefa2)
  }

  selecionarTarefa(tarefa: Tarefa) {
        if(tarefa.dataConclusao){
          return;
        }
  }
  
  obterIconeDaTarefa(tarefa : Tarefa) :string {
     if(tarefa.dataConclusao) {
      return 'check-concluido.svg'
     }
     return 'check.svg'
  }

}
