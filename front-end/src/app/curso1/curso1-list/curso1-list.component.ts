import { Component, OnInit } from '@angular/core';
import { Curso1Service } from '../curso1.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso1-list',
  templateUrl: './curso1-list.component.html',
  styleUrls: ['./curso1-list.component.scss']
})
export class Curso1ListComponent implements OnInit {
    cursos: any = [] //Vetor vazio
    displayedColumns : string[] = ['nome', 'carga_horaria', 
'editar', 'excluir']

  constructor(
      private cursoSrv : Curso1Service,
    private snackBar : MatSnackBar
    ) { }

 async ngOnInit() {
      this.cursos = await this.cursoSrv.listar()
      console.log(this.cursos)
    }
    async excluir(id : string){
        if(confirm('Deseja realmente excluir este item?')){
            try{
                //1) Efetuar a exclusão
                await this.cursoSrv.excluir(id)
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
