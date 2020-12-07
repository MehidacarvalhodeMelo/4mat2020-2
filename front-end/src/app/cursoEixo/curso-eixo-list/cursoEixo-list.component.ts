import { Component, OnInit } from '@angular/core';
import { CursoEixoService } from '../cursoEixo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-cursoEixo-list',
    templateUrl: './cursoEixo-list.component.html',
    styleUrls: ['./cursoEixo-list.component.scss']
})
export class CursoEixoListComponent implements OnInit {
    cursoEixos: any = [] //Vetor vazio
    displayedColumns: string[] = [ 'curso1', 'eixo', 
         'editar', 'excluir']

    constructor(
        private cursoEixoSrv: CursoEixoService,
        private snackBar: MatSnackBar
    ) { }

    async ngOnInit() {
        this.cursoEixos = await this.cursoEixoSrv.listar()
        console.log(this.cursoEixos)
    }
    async excluir(id: string) {
        if (confirm('Deseja realmente excluir este item?')) {
            try {
                //1) Efetuar a exclusão
                await this.cursoEixoSrv.excluir(id)
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
