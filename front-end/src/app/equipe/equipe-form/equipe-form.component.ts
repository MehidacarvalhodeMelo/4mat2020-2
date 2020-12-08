import { CursoEixoService } from './../../cursoEixo/cursoEixo.service';
import { Curso1Service } from './../../curso1/curso1.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EquipeService } from './../equipe.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from 'src/app/professor/professor.service';
import { SalaAula1Service } from 'src/app/sala-aula1/sala-aula1.service';
import { MestreService } from 'src/app/mestre/mestre.service';

@Component({
    selector: 'app-equipe-form',
    templateUrl: './equipe-form.component.html',
    styleUrls: ['./equipe-form.component.scss']
})
export class EquipeFormComponent implements OnInit {

    title: string = 'Nova equipe'
    equipe: any = {} //Objeto vazio, nome da entidade no SINGULAR

    diasSemana : any = [
    { val: 'dom', descr: 'Domingo'} ,
    { val: 'seg', descr: 'Segunda-feira'} ,
    { val: 'ter', descr: 'Terça-feira'} ,
    { val: 'qua', descr: 'Quarta-feira'} ,
    { val: 'qui', descr: 'Quinta-feira'} ,
    { val: 'sex', descr: 'Sexta-feira'} ,
    { val: 'sáb', descr: 'Sábado'} 

    ]

    niveis: any = [
        { valor: 'Fase I', descr: 'Fase I' },
        { valor: 'Fase II', descr: 'IFase II' },
        
    ]
    //Variáveis para armazenar as listagens das entidades relacionadas
    cursos1 : any = []  //Nome no plural, vetor vazio
    mestres : any = []
    salasAula : any = []

    constructor(
        private professorSrv: ProfessorService,
        private equipeSrv: EquipeService,
        private curso1Srv : Curso1Service,
        private mestreSrv : MestreService,
        private salaAula1Srv : SalaAula1Service,
        private cursoEixoSrv : CursoEixoService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        //Verificando se existe a rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try{
                //1) Trazer o registro do back-end para edição
                this.equipe = await this.equipeSrv.obterUm(this.actRoute.snapshot.params['id'])
                this.title = 'Editando equipe'
            } catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.', 'Que pena', { duration: 5000})
            }
            
        }

        //Carregar as listagens das entidades relacionadas
        try {
            this.cursos1 = await this.curso1Srv.listar()
            this.mestres = await this.mestreSrv.listar()
            this.salasAula = await this.salaAula1Srv.listar()



        }
        catch(erro){
            console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados do formulário.', 'Que pena', { duration: 5000})
            }

    }

    async salvar(form: NgForm) {
        console.log(this.equipe)
        try {
            if (form.valid) {
                if (this.equipe._id) {
                    await this.equipeSrv.atualizar(this.equipe)
                }  else {
                    await this.equipeSrv.novo(this.equipe)
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