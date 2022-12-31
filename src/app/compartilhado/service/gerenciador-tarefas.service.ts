import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GerenciadorTarefasService {

  constructor(protected http: HttpClient) { }

      makeHttpRequest(req: any): Promise<any> {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          ...(req.headers || {}) 
        })
        return this.http.request(
           req.method || 'GET',
          `${environment.apiGerenciadorTarefas}/${req.url}`,
           {
            body:req.body || null,
            params: req.params || null,
            headers: headers
           }
        ).toPromise();
      }
}
