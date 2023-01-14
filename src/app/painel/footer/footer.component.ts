import { Component, OnInit } from '@angular/core';
import { ModalTarefaService } from '../shereds/services/modal-tarefa.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  anoAtual: number = new Date().getFullYear();
  constructor(private modalTarefaService: ModalTarefaService) { }

  ngOnInit(): void {
  }

  abrirModalTarefa(){
    this.modalTarefaService.exibirModal();
  }

}
