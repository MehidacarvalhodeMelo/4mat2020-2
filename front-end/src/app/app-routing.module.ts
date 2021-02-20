import { CursoEixoFormComponent } from './cursoEixo/curso-eixo-form/curso-eixo-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { Curso1ListComponent} from './curso1/curso1-list/curso1-list.component';
import { Curso1FormComponent} from './curso1/curso1-form/curso1-form.component';
import { EixoListComponent } from './eixo/eixo-list/eixo-list.component';
import { EixoFormComponent } from './eixo/eixo-form/eixo-form.component';
import { SalaAula1ListComponent } from './sala-aula1/sala-aula1-list/sala-aula1-list.component';
import { SalaAula1FormComponent } from './sala-aula1/sala-aula1-form/sala-aula1-form.component';
import { MestreListComponent } from './mestre/mestre-list/mestre-list.component';
import {MestreFormComponent} from './mestre/mestre-form/mestre-form.component';
import { CursoEixoListComponent } from './cursoEixo/curso-eixo-list/cursoEixo-list.component';
import { EquipeListComponent } from './equipe/equipe-list/equipe-list.component';
import { EquipeFormComponent } from './equipe/equipe-form/equipe-form.component';
import { AtividadeListComponent } from './atividade/atividade-list/atividade-list.component';
import { AtividadeFormComponent } from './atividade/atividade-form/atividade-form.component';
import { Aluno1ListComponent } from './aluno1/aluno1-list/aluno1-list.component';
import { Aluno1FormComponent } from './aluno1/aluno1-form/aluno1-form.component';
import { AtividadeEixoListComponent } from './atividade-eixo/atividade-eixo-list/atividade-eixo-list.component';
import { AtividadeEixoFormComponent } from './atividade-eixo/atividade-eixo-form/atividade-eixo-form.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
    //Rotas no Angular nunca começam com barra /
    { path: 'curso', component: CursoListComponent},
    {path: 'curso/novo', component: CursoFormComponent},
    {path: 'curso/:id', component: CursoFormComponent},
    {path: 'turma', component: TurmaListComponent},
    {path: 'turma/novo', component: TurmaFormComponent},
    {path: 'turma/id', component: TurmaFormComponent},
    //Meu projeto
    {path: 'curso1', component: Curso1ListComponent},
    {path: 'curso1/novo', component: Curso1FormComponent},
    {path: 'curso1/:id', component: Curso1FormComponent},
    {path: 'eixo', component: EixoListComponent},
    {path: 'eixo/novo', component: EixoFormComponent},
    {path: 'eixo/:id', component: EixoFormComponent},
    { path: 'sala-aula1', component: SalaAula1ListComponent},
    {path: 'sala-aula1/novo', component: SalaAula1FormComponent},
    {path: 'sala-aula1/:id', component: SalaAula1FormComponent},
    { path: 'mestre', component: MestreListComponent},
     {path: 'mestre/novo', component: MestreFormComponent},
    {path: 'mestre/:id', component: MestreFormComponent},
    {path: 'curso1-eixo', component: CursoEixoListComponent},
     {path: 'curso1-eixo/novo', component: CursoEixoFormComponent},
    {path: 'curso1-eixo/:id', component: CursoEixoFormComponent},
    {path: 'equipe', component: EquipeListComponent},
     {path: 'equipe/novo', component: EquipeFormComponent},
    {path: 'equipe/:id', component: EquipeFormComponent},
    {path: 'atividade', component: AtividadeListComponent},
    {path: 'atividade/novo', component: AtividadeFormComponent},
    {path: 'atividade/:id', component: AtividadeFormComponent},
    {path: 'aluno1', component: Aluno1ListComponent},
     {path: 'aluno1/novo', component: Aluno1FormComponent},
    {path: 'aluno1/:id', component: Aluno1FormComponent},
    {path: 'atividade-eixo', component: AtividadeEixoListComponent},
    {path: 'atividade-eixo/novo', component: AtividadeEixoFormComponent},
    {path: 'atividade-eixo/:id', component: AtividadeEixoFormComponent},
    {path: '', component: InicialComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
