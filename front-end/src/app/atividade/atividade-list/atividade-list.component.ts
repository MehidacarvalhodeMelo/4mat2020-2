import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../atividade.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-atividade-list',
    templateUrl: './atividade-list.component.html',
    styleUrls: ['./atividade-list.component.scss']
})
export class AtividadeListComponent implements OnInit {
    atividades: any = [] //Vetor vazio
    displayedColumns: string[] = ['nivel', 'carga_horaria',
'editar', 'excluir']
    constructor(
        private atividadeSrv: AtividadeService,
        private snackBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.atividades = await this.atividadeSrv.listar()
        console.log(this.atividades)
    }
    async excluir(id: string) {
        if (confirm('Deseja realmente excluir este item?')) {
            try {
                //1) Efetuar a exclusão
                await this.atividadeSrv.excluir(id)
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
