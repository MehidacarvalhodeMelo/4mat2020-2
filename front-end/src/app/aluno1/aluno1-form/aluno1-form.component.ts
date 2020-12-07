import { MatSnackBar } from '@angular/material/snack-bar';
import { Aluno1Service } from './../aluno1.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EquipeService } from 'src/app/equipe/equipe.service';

@Component({
    selector: 'app-aluno1-form',
    templateUrl: './aluno1-form.component.html',
    styleUrls: ['./aluno1-form.component.scss']
})
export class Aluno1FormComponent implements OnInit {

    title: string = 'Novo aluno'
    aluno1: any = {} //Objeto vazio, nome da entidade no SINGULAR
    equipes : any = []

    

    constructor(
        private aluno1Srv: Aluno1Service,
        private equipeSrv: EquipeService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        //Verificando se existe a rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try{
                //1) Trazer o registro do back-end para edição
                this.aluno1 = await this.aluno1Srv.obterUm(this.actRoute.snapshot.params['id'])
                this.title = 'Editando aluno'
            } catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.', 'Que pena', { duration: 5000})
            }
            
        }
    }

    async salvar(form: NgForm) {
        try {
            if (form.valid) {
                if (this.aluno1._id) {
                    await this.aluno1Srv.atualizar(this.aluno1)
                }  else {
                    await this.aluno1Srv.novo(this.aluno1)
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