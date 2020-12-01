import { MatSnackBar } from '@angular/material/snack-bar';
import { EixoService } from './../eixo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-eixo-form',
    templateUrl: './eixo-form.component.html',
    styleUrls: ['./eixo-form.component.scss']
})
export class EixoFormComponent implements OnInit {

    title: string = 'Novo eixo'
    eixo: any = {} //Objeto vazio, nome da entidade no SINGULAR

    niveis: any = [
        { valor: 'Fase I', descr: 'Fase I' },
        { valor: 'Fase II', descr: 'Fase II' }
    ]

    constructor(
        private eixoSrv: EixoService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        //Verificando se existe a rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try{
                //1) Trazer o registro do back-end para edição
                this.eixo = await this.eixoSrv.obterUm(this.actRoute.snapshot.params['id'])
                this.title = 'Editando eixo'
            } catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.', 'Que pena', { duration: 5000})
            }
            
        }
    }

    async salvar(form: NgForm) {
        try {
            if (form.valid) {
                if (this.eixo._id) {
                    await this.eixoSrv.atualizar(this.eixo)
                }  else {
                    await this.eixoSrv.novo(this.eixo)
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