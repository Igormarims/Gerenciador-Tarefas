import { Tarefa } from './../models/tarefa.model';
import { ModoFormulario } from './../enums/modo-formulario.enum';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ModalTarefaConfig = {
  exibir?: boolean;
  modo?: ModoFormulario;
  tarefa?:Tarefa;
}


@Injectable({
  providedIn: 'root'
})
export class ModalTarefaService {
  
   private subject: Subject<ModalTarefaConfig> = new Subject();
   private eventEmitter = this.subject.asObservable();

  constructor() { }
  
  exibirModal(config?:ModalTarefaConfig) {
    this.subject.next({
      ...(config || {}),
      exibir: true 
    })

  }

  ocultarModal() {
    this.subject.next({
      exibir: false
    })
  }
   
  escutarEvento(callback: Function) {
     this.eventEmitter.subscribe((event)=> {
         callback(event)
     })
  }

}
