import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
    private server = environment.apiServer
    private apiUri = this.server + 'curso'

  constructor(private http : HttpClient) { }

  listar(){
     return this.http.get(this.apiUri).toPromise()
  }
  excluir(id : string){
      return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
  }
}
