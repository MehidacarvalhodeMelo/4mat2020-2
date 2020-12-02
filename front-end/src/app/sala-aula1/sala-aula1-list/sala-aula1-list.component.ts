import { Component, OnInit } from '@angular/core';
import { SalaAula1Service } from '../sala-aula1.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sala-aula1-list',
  templateUrl: './sala-aula1-list.component.html',
  styleUrls: ['./sala-aula1-list.component.scss']
})
export class SalaAula1ListComponent implements OnInit {
    salasAula1: any = [] //Vetor vazio
    displayedColumns : string[] = ['nome', 'capacidade', 'recursos_didaticos',
'editar', 'excluir']

  constructor(
      private salaAula1Srv : SalaAula1Service,
    private snackBar : MatSnackBar
    ) { }

 async ngOnInit() {
      this.salasAula1 = await this.salaAula1Srv.listar()
      console.log(this.salasAula1)
    }
    async excluir(id : string){
        if(confirm('Deseja realmente excluir este item?')){
            try{
                //1) Efetuar a exclusão
                await this.salaAula1Srv.excluir(id)
                //2)atualizar os dados da tabela
                this.ngOnInit()
                               //3)Dar um feedback de sucesso para o usuário
                this.snackBar.open('Item excluido com sucesso.', 'Entendi',{
                    duration: 5000 //5 segundos

                })
            }
 
 catch(erro){
                console.error(erro)
                //4)Dar um feedback de serro para o usuário
                this.snackBar.open('ERRO não foi possível excluir este item.', 'Que pena!',{
    duration: 5000 //5 segundos
})

       }

     }       
 }
}
