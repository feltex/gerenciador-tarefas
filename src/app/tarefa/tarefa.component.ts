import { Component, OnInit } from '@angular/core';
import {Tarefa} from "../modelo/tarefa";
import {TarefaService} from "../service/tarefa.service";

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  listaTarefas : Tarefa[] = []
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
     this.tarefaService.listar().subscribe((tarefas) =>
       this.listaTarefas = tarefas)
  }

  adicionar(nomeTarefa: string) {
    if (nomeTarefa.trim().length == 0){
      return;
    }

     if(!this.nomeExiste(nomeTarefa)){
       this.tarefaService.adicionar(nomeTarefa);
     }
  }

  deletar(id: number) {
    this.tarefaService.deletar(id);
  }

  completar(id: number) {
   this.tarefaService.completar(id);
  }
  private nomeExiste(nomeTarefa: string) {
    const tarefaEncontrada = this.listaTarefas.filter(t => t.nome.toLowerCase() === nomeTarefa.toLowerCase())
    return (tarefaEncontrada.length > 0);
  }
}
