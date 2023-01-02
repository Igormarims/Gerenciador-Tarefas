import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GerenciadorTarefasService } from 'src/app/compartilhado/service/gerenciador-tarefas.service';
import { LoginRequest, LoginResponse } from 'src/app/login/types.model';
import { UsuarioLogado } from 'src/app/models/usuario-logado.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GerenciadorTarefasService {

  constructor(protected override http: HttpClient) {
    super(http)
   }

   async login(payload: LoginRequest):Promise<LoginResponse> {
        const resultado: LoginResponse = await this.makeHttpRequest({
          url: 'login',
          method: 'POST',
          body: payload,
         })
          localStorage.setItem('acessToken', resultado.token);
          localStorage.setItem('usuarioNome', resultado.nome);
          localStorage.setItem('usuarioEmail', resultado.email);
        return resultado;
   }

   async deslogar() {
     localStorage.removeItem('acessToken');
     localStorage.removeItem('usuarioNome');
     localStorage.removeItem('usuarioEmail');
   }  

   estaLogado(): boolean {
      if(localStorage.getItem('acessToken')) {
        return true;
      }
      return false;
   }
   
   obterUsuarioLogado(): UsuarioLogado | null {
       if(!this.estaLogado()) {
        return null;
       }
       const nome = localStorage.getItem('usuarioNome');
       const email = localStorage.getItem('usuarioEmail');
       const token = localStorage.getItem('acessToken');

       return new UsuarioLogado(nome!, email! , token!);

   }



 
     
}
