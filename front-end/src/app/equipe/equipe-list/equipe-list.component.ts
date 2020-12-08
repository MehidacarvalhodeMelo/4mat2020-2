import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-equipe-list',
    templateUrl: './equipe-list.component.html',
    styleUrls: ['./equipe-list.component.scss']
})
export class EquipeListComponent implements OnInit {
    equipes: any = [] //Vetor vazio
    displayedColumns: string[] = ['nome', 'curso', 'mestre', 
        'data_inicial', 'dias_semana', 'horario_inicial',
        'sala_aula', 'editar', 'excluir']

    constructor(
        private equipeSrv: EquipeService,
        private snackBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.equipes = await this.equipeSrv.listar()
        console.log(this.equipes)
        
    }
    async excluir(id: string) {
        if (confirm('Deseja realmente excluir este item?')) {
            try {
                //1) Efetuar a exclusão
                await this.equipeSrv.excluir(id)
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
