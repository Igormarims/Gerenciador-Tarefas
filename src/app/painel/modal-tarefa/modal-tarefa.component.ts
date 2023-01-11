import { ModoFormulario } from './../shereds/enums/modo-formulario.enum';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-tarefa',
  templateUrl: './modal-tarefa.component.html',
  styleUrls: ['./modal-tarefa.component.scss']
})
export class ModalTarefaComponent implements OnInit {
   exibir = true;
   form: FormGroup 
   modo: ModoFormulario = ModoFormulario.CADASTRO;
   configuracoes: any;
   carregando = false;

  

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [null, Validators.compose([Validators.minLength(4), Validators.required])],
      dataPrevistaConclusao: [null, Validators.compose([Validators.required])],
      dataConclusao: [null]
    })
   }

  ngOnInit(): void {
    
    // console.log(this.form.get('nome'));
    
    this.definirConfiguracao();   
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
      acaoBtnSecundario: this.feicharModal.bind(this)
    }
     if(this.estaEmModoEdicao() ){
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

 feicharModal(){
  this.exibir = false;
 }

 excluir() {
    console.log('excluir');
 }

  async submit(){
    if(this.form.invalid){
      return;
    }
    try{

    }catch(e){

    }

  }

}
