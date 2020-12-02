import { MatSnackBar } from '@angular/material/snack-bar';
import { SalaAula1Service } from './../sala-aula1.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sala-aula1-form',
    templateUrl: './sala-aula1-form.component.html',
    styleUrls: ['./sala-aula1-form.component.scss']
})
export class SalaAula1FormComponent implements OnInit {

    title: string = 'Novo salaAula1'
    salaAula1: any = {} //Objeto vazio, nome da entidade no SINGULAR

    

    constructor(
        private salaAula1Srv: SalaAula1Service,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        //Verificando se existe a rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try{
                //1) Trazer o registro do back-end para edição
                this.salaAula1 = await this.salaAula1Srv.obterUm(this.actRoute.snapshot.params['id'])
                this.title = 'Editando salaAula1'
            } catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.', 'Que pena', { duration: 5000})
            }
            
        }
    }

    async salvar(form: NgForm) {
        try {
            if (form.valid) {
                if (this.salaAula1._id) {
                    await this.salaAula1Srv.atualizar(this.salaAula1)
                }  else {
                    await this.salaAula1Srv.novo(this.salaAula1)
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