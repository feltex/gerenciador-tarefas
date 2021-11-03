import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  TAREFA_KEY = 'tarefa_key'
  listaTarefas : any[] = []
  constructor() { }

  ngOnInit(): void {
     const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if (tarefas){
      this.listaTarefas = JSON.parse(tarefas)
    }
  }

  adicionar(nomeTarefa: string) {
    if (nomeTarefa.trim().length == 0){
      return;
    }
    const tarefaEncontrada = this.listaTarefas.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())

    if (!tarefaEncontrada){
      this.listaTarefas.push({id: this.listaTarefas.length, nome: nomeTarefa, concluida: false})
      this.salvarLista()
    }
  }

  deletar(id: number) {
    this.listaTarefas = this.listaTarefas.filter(item => (item.id != id))
    this.salvarLista()
  }

  completar(id: number) {
    const tarefaEncontrada = this.listaTarefas.find( item => item.id == id)

    if (tarefaEncontrada){
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida
      this.salvarLista()
    }

  }

  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.listaTarefas))
  }

}
