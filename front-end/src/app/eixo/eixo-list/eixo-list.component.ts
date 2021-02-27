import { Component, OnInit } from '@angular/core';
import { EixoService } from '../eixo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eixo-list',
  templateUrl: './eixo-list.component.html',
  styleUrls: ['./eixo-list.component.scss']
})
export class EixoListComponent implements OnInit {
    eixos: any = [] //Vetor vazio
    displayedColumns : string[] = ['nome', 'carga_horaria', 'nivel', 'cor',
'editar', 'excluir']
  constructor(
      private eixoSrv : EixoService,
    private snackBar : MatSnackBar
    ) { }

 async ngOnInit() {
      this.eixos = await this.eixoSrv.listar()
      console.log(this.eixos)
    }
    async excluir(id : string){
        if(confirm('Deseja realmente excluir este item?')){
            try{
                //1) Efetuar a exclusão
                await this.eixoSrv.excluir(id)
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
