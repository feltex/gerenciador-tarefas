import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Tarefa } from '../modelo/tarefa';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly URL = environment.tarefaServiceUrl;

  constructor( private http: HttpClient ) {
  }

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.URL);
  }

  adicionar( nome: string ) {
    this.http.post(this.URL, nome)
      .subscribe(() => {});
  }

  deletar( id: number ) {
    this.http.delete(this.URL + `/${id}`)
      .subscribe(() => {});
  }

  completar( id: number ) {
    this.http.patch(this.URL + `/${id}`, '')
      .subscribe(() => {});
  }
}
