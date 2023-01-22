import { ModalTarefaService, ModalTarefaConfig } from './../shereds/services/modal-tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Filtro } from '../shereds/models/filtro.model';
import { Tarefa } from '../shereds/models/tarefa.model';
import { TarefaApiService } from '../shereds/services/tarefa-api.service';
import { ModoFormulario } from '../shereds/enums/modo-formulario.enum';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
   tarefas?: Tarefa[] = [];
   tarefaSelecionada?: Tarefa
   
 
  constructor(private tarefaApiService: TarefaApiService,
              private modalTarefaService: ModalTarefaService) { }

  ngOnInit(): void {
      this.filtrarTarefas();
      
      this.modalTarefaService.escutarEvento((config: ModalTarefaConfig)=> {
             if(config.exibir === false) {
                this.filtrarTarefas();
              }
      })

  }

  async filtrarTarefas(filtro?: Filtro) {
     this.tarefas = await this.tarefaApiService.listar(filtro);
  }

  selecionarTarefa(tarefa: Tarefa) {
        if(tarefa.dataConclusao){
          return;
        }
       
        this.tarefaSelecionada = tarefa;
        this.modalTarefaService.exibirModal({
          tarefa,
          modo: ModoFormulario.EDICAO,
       });
  }
  
  obterIconeDaTarefa(tarefa : Tarefa) :string {
     if(tarefa.dataConclusao) {
      return 'check-concluido.svg'
     }
     return 'check.svg'
  }

}
