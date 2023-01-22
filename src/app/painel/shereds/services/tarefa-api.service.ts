import { AuthService } from './../../../service/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GerenciadorTarefasService } from 'src/app/compartilhado/service/gerenciador-tarefas.service';
import { Filtro } from '../models/filtro.model';
import { Tarefa } from '../models/tarefa.model';
import { RespostaApi } from '../models/resposta-api.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaApiService extends GerenciadorTarefasService {

  constructor(protected override http: HttpClient,
              private authService: AuthService ){
    super(http);
  }

  public override makeHttpRequest(req: any): Promise<any> {
     const reqConfig = req || {};
     reqConfig.headers = reqConfig.headers || {};
     reqConfig.headers['Authorization'] = `Bearer ${this.authService.obterUsuarioLogado()?.token}`;
     return super.makeHttpRequest(req)
  }
  async listar(filtro?: Filtro): Promise<Tarefa[]> {
    return this.makeHttpRequest({
      url: 'tarefa',
      params: filtro?.toQueryParams(),
     });
  }
  
   async editar( payload: Tarefa): Promise<RespostaApi>{
      return this.makeHttpRequest({
        url: `tarefa/${payload.id}`,
        method: 'PUT',
        body: payload
      })
   }

   async excluir(id?: string): Promise<RespostaApi>{
    return this.makeHttpRequest({
      url: `tarefa/${id}`,
      method: 'DELETE',
    })
 }

    async cadastrar(tarefa: Tarefa): Promise<RespostaApi>{
      return this.makeHttpRequest({
        url: `tarefa`,
        method: 'POST',
        body: tarefa
      })
    }

  }
