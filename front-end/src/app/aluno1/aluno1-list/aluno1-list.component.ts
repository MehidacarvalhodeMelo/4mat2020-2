import { Component, OnInit } from '@angular/core';
import { Aluno1Service } from '../aluno1.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-aluno1-list',
    templateUrl: './aluno1-list.component.html',
    styleUrls: ['./aluno1-list.component.scss']
})
export class Aluno1ListComponent implements OnInit {
    alunos1: any = [] //Vetor vazio
    displayedColumns: string[] = ['nome', 'data_nascimento', 'ra', 'telefone_contato',
        'email', 'equipe', 'editar', 'excluir']

    constructor(
        private aluno1Srv: Aluno1Service,
        private snackBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.alunos1 = await this.aluno1Srv.listar()
        console.log(this.alunos1)
    }
    async excluir(id: string) {
        if (confirm('Deseja realmente excluir este item?')) {
            try {
                //1) Efetuar a exclusão
                await this.aluno1Srv.excluir(id)
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
