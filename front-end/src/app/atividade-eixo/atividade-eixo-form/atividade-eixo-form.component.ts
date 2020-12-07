import { CursoService } from './../../curso/curso.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AtividadeEixoService } from '../atividade-eixo.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from 'src/app/professor/professor.service';
import { SalaAulaService } from 'src/app/sala-aula/sala-aula.service';
import { EixoService} from 'src/app/eixo/eixo.service';
import { AtividadeService } from 'src/app/atividade/atividade.service';

@Component({
    selector: 'app-atividadeEixo-form',
    templateUrl: './atividade-eixo-form.component.html',
    styleUrls: ['./atividade-eixo-form.component.scss']
})
export class AtividadeEixoFormComponent implements OnInit {

    title: string = 'Nova atividadeEixo'
    atividadeEixo: any = {} //Objeto vazio, nome da entidade no SINGULAR

    

    niveis: any = [
        { valor: 'Fase I', descr: 'Fase I' },
        { valor: 'Fase II', descr: 'Fase II' },
        
    ]
    //Variáveis para armazenar as listagens das entidades relacionadas
    atividades : any = []  //Nome no plural, vetor vazio
    eixos : any = []
    

    constructor(
        private eixoSrv: EixoService,
        private atividadeEixoSrv: AtividadeEixoService,
        private atividadeSrv : AtividadeService,
        private snackBar: MatSnackBar,
        private location: Location,
        private actRoute: ActivatedRoute
    ) { }

    async ngOnInit() {
        //Verificando se existe a rota que trouxe ao formulário
        if (this.actRoute.snapshot.params['id']) {
            try{
                //1) Trazer o registro do back-end para edição
                this.atividadeEixo = await this.atividadeEixoSrv.obterUm(this.actRoute.snapshot.params['id'])
                this.title = 'Editando atividadeEixo'
            } catch (erro) {
                console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados para edição.', 'Que pena', { duration: 5000})
            }
            
        }

        //Carregar as listagens das entidades relacionadas
        try {
            this.atividades = await this.atividadeSrv.listar()
            this.eixos = await this.eixoSrv.listar()
            console.log(this.atividades)
            



        }
        catch(erro){
            console.log(erro)
                this.snackBar.open('ERRO: não foi possível carregar os dados do formulário.', 'Que pena', { duration: 5000})
            }

    }

    async salvar(form: NgForm) {
        try {
            if (form.valid) {
                if (this.atividadeEixo._id) {
                    await this.atividadeEixoSrv.atualizar(this.atividadeEixo)
                }  else {
                    await this.atividadeEixoSrv.novo(this.atividadeEixo)
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