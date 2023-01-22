import { TarefaApiService } from './../shereds/services/tarefa-api.service';
import { ModalTarefaService, ModalTarefaConfig } from './../shereds/services/modal-tarefa.service';
import { ModoFormulario } from './../shereds/enums/modo-formulario.enum';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tarefa } from '../shereds/models/tarefa.model';


@Component({
  selector: 'app-modal-tarefa',
  templateUrl: './modal-tarefa.component.html',
  styleUrls: ['./modal-tarefa.component.scss']
})
export class ModalTarefaComponent implements OnInit {
   exibir?:boolean;
   form: FormGroup 
   modo: ModoFormulario = ModoFormulario.CADASTRO;
   configuracoes: any;
   carregando = false;
   tarefa?: Tarefa;
   private erro?:string;
   @ViewChild('dataPrevistaConclusao') elDataPrevistaConclusao?: ElementRef

  

  constructor(private fb: FormBuilder, 
      private modalTarefaService: ModalTarefaService,
      private tarefaApiService: TarefaApiService,
      private render2: Renderer2) {
       this.definirConfiguracao();  
    
     this.form = this.fb.group({
      nome: [null, Validators.compose([Validators.minLength(4), Validators.required])],
      dataPrevistaConclusao: [null, Validators.compose([Validators.required])],
      dataConclusao: [null]
    })
   }

  ngOnInit(): void {
     this.modalTarefaService.escutarEvento((config: ModalTarefaConfig)=> {
         this.exibir = config.exibir!
         this.modo = config.modo || this.modo
         this.tarefa = config.tarefa
          
         this.definirConfiguracao();
       
          if(this.estaEmModoEdicao()){
          this.render2.setAttribute(this.elDataPrevistaConclusao?.nativeElement, 'type', 'date');
          this.form.get('nome')?.setValue(this.tarefa?.nome);
          this.form.get('dataPrevistaConclusao')?.setValue(
            this.tarefa?.dataPrevistaConclusao?.split('T')[0]
          );
         }
     })

    

  }

  getErros(){
    let erros = []
    if(this.campoJaFoiManipulado('nome')){
       
       if(this.form.controls['nome'].errors?.['required']) {
        erros.push('Nome é obrigatório')

       }
       if(this.form.get('nome')?.hasError('minlength')) {
        erros.push('Nome deve ter no mínimo 4 caracteres')
        
        }
    }

    if( this.campoJaFoiManipulado('dataPrevistaConclusao') ){
      if(this.form.get('dataPrevistaConclusao')?.hasError('required')){
         erros.push('Data prevista conclusão é obrigatória')
      }
    }
     if(this.erro) {
      erros.push(this.erro);
     }

    return erros.join('<br/>')
  }

  campoJaFoiManipulado(campo: string){
     return this.form.get(campo)?.dirty 
     || this.form.get(campo)?.touched
  }

  definirConfiguracao(){
    const configuracao = {
      titulo: 'Adicionar uma tarefa',
      txtBtnPrincipal: 'Salvar',
      txtBtnSecundario: 'Cancelar',
      acaoBtnSecundario: this.fecharModal.bind(this)
    }
     if(this.estaEmModoEdicao()){
      configuracao.titulo = 'Editar tarefa'
      configuracao.txtBtnPrincipal = 'Salvar alterações'
      configuracao.txtBtnSecundario = 'Excluir'
      configuracao.acaoBtnSecundario = this.excluir.bind(this)
     }

     this.configuracoes = configuracao;
  }

  estaEmModoEdicao(): boolean {
    return this.modo === ModoFormulario.EDICAO
  }

 fecharModal(){
  this.form.reset()
  this.modo = ModoFormulario.CADASTRO;
  this.modalTarefaService.ocultarModal();
 }

async excluir() {
  if(!this.tarefa) {
    this.erro = 'Nenhuma tarefa selecionada'
    return;
  }
  this.carregando = true
  try {
      await this.tarefaApiService.excluir(this.tarefa.id)
       this.fecharModal();
       
       
     } catch (e: any) {
      this.erro = e.error && e.error.message ? 
      'Ocorreu algum erro ao excluir a tarefa, tente novamente mais tarde'
       : ''
     }

     this.carregando = false;

 }

  async submit(){
    if(this.form.invalid){
      return;
    }

    this.carregando = true;
    try{
       const payload: Tarefa = this.form.value;
     
       if(this.estaEmModoEdicao()) {
         if(!this.tarefa) {
          this.erro =   'Nenhuma tarefa selecionada'
            return;
         }
        payload.id = this.tarefa?.id

        await this.tarefaApiService.editar(payload)
      }else {
         await this.tarefaApiService.cadastrar(payload)
       }
       this.fecharModal();

    }catch(e:any){
      this.erro = e.error && e.error.message ? 
      'Ocorreu erro ao salvar a tarefa, tente novamente mais tarde'
       : ''
      
    }
    this.carregando = false;

  }

}
