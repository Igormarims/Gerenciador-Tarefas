import { ModalTarefaConfig, ModalTarefaService } from './shereds/services/modal-tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  modalTaferaAberto: boolean = false;
  constructor(private ModalTarefaService: ModalTarefaService) { }

  ngOnInit(): void {
      this.ModalTarefaService.escutarEvento((event:ModalTarefaConfig)=>{
          this.modalTaferaAberto = event.exibir!;
          
      }) 
  }



}
