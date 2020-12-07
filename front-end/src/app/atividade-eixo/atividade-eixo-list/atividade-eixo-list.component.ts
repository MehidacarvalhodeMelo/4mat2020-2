import { Component, OnInit } from '@angular/core';
import { AtividadeEixoService } from '../atividade-eixo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-atividade-eixo-list',
    templateUrl: './atividade-eixo-list.component.html',
    styleUrls: ['./atividade-eixo-list.component.scss']
})
export class AtividadeEixoListComponent implements OnInit {
    atividade_eixos: any = [] //Vetor vazio
    displayedColumns: string[] = [ 'atividade', 'eixo', 
         'editar', 'excluir']

    constructor(
        private atividade_eixoSrv: AtividadeEixoService,
        private snackBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.atividade_eixos = await this.atividade_eixoSrv.listar()
        console.log(this.atividade_eixos)
    }
    async excluir(id: string) {
        if (confirm('Deseja realmente excluir este item?')) {
            try {
                //1) Efetuar a exclusão
                await this.atividade_eixoSrv.excluir(id)
                //2)atualizar os dados da tabela
                this.ngOnInit()
                //3)Dar um feedback de sucesso para o usuário
                this.snackBar.open('Item excluido com sucesso.', 'Entendi', {
                    duration: 5000 //5 segundos

                })
            }

            catch (erro) {
                console.error(erro)
                //4)Dar um feedback de serro para o usuário
                this.snackBar.open('ERRO não foi possível excluir este item.', 'Que pena!', {
                    duration: 5000 //5 segundos
                })

            }

        }

    }
}
