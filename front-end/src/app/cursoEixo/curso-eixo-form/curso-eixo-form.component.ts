import { CursoService } from './../../curso/curso.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoEixoService } from '../cursoEixo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from 'src/app/professor/professor.service';
import { SalaAulaService } from 'src/app/sala-aula/sala-aula.service';
import { EixoService} from 'src/app/eixo/eixo.service';

@Component({
    selector: 'app-cursoEixo-form',
    templateUrl: './curso-eixo-form.component.html',
    styleUrls: ['./curso-eixo-form.component.scss']
})
export class CursoEixoFormComponent implements OnInit {

    title: string = 'Novo cursoEixo'
    cursoEixo: any = {} //Objeto vazio, nome da entidade no SINGULAR

    

    niveis: any = [
        { valor: 'Fase I', descr: 'Fase I' },
        { valor: 'Fase II', descr: 'Fase II' },
        
    ]
    //Variáveis para armazenar as listagens das entidades relacionadas
    cursos : any = []  //Nome no plural, vetor vazio
    eixos : any = []
    

    constructor(
        private eixoSrv: EixoService,
        private cursoEixoSrv: CursoEixoService,
        private cursoSrv : CursoService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        //Verificando se existe a rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try{
                //1) Trazer o registro do back-end para edição
                this.cursoEixo = await this.cursoEixoSrv.obterUm(this.actRoute.snapshot.params['id'])
                this.title = 'Editando cursoEixo'
            } catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.', 'Que pena', { duration: 5000})
            }
            
        }

        //Carregar as listagens das entidades relacionadas
        try {
            this.cursos = await this.cursoSrv.listar()
            this.eixos = await this.eixoSrv.listar()
            



        }
        catch(erro){
            console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados do formulário.', 'Que pena', { duration: 5000})
            }

    }

    async salvar(form: NgForm) {
        try {
            if (form.valid) {
                if (this.cursoEixo._id) {
                    await this.cursoEixoSrv.atualizar(this.cursoEixo)
                }  else {
                    await this.cursoEixoSrv.novo(this.cursoEixo)
                }
                //1)Enviar os dados para o back-end para serem salvos
             
                //2)Dar um feedback(mensagem) para o usuário
                this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
                    { duration: 5000 })
                //3) Voltar para a tela de listagem
                this.location.back()
            }


        }
        catch (erro) {
            console.log(erro)
            this.snackBar.open('Erro: não foi possível salvar os dados', 'Que pena!',
                { duration: 5000 })
        }
    }

    voltar(form: NgForm) {
        let result = true
        // form.dirty = formulário "sujo", não salvo (via código)
        // form.touched = o conteúdo de algum campo foi alterado (via usuário)
        if (form.dirty && form.touched) {
            result = confirm('Há dados não salvos. Deseja realmente voltar?')
        }
        // Retorna à página anterior se resposta foi positiva ou se o formulário
        // estiver "limpo"
        if (result) this.location.back()
    }
}       