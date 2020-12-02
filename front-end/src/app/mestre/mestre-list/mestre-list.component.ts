import { Component, OnInit } from '@angular/core';
import { MestreService } from '../mestre.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mestre-list',
  templateUrl: './mestre-list.component.html',
  styleUrls: ['./mestre-list.component.scss']
})
export class MestreListComponent implements OnInit {
    mestres: any = [] //Vetor vazio
    displayedColumns : string[] = ['nome', 'formacao', 'data_nascimento', 'cpf', 'rg', 'valor_hora_aula', 'endereco', 'telefone', 'email',
'editar', 'excluir']

  constructor(
      private mestreSrv : MestreService,
    private snackBar : MatSnackBar
    ) { }

 async ngOnInit() {
      this.mestres = await this.mestreSrv.listar()
      console.log(this.mestres)
    }
    async excluir(id : string){
        if(confirm('Deseja realmente excluir este item?')){
            try{
                //1) Efetuar a exclusão
                await this.mestreSrv.excluir(id)
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
