import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Na seção de imports do app.module.ts
//Habilitar formatação de moeda
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { UiComponent } from './ui/ui.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { Curso1ListComponent } from './curso1/curso1-list/curso1-list.component';
import { Curso1FormComponent } from './curso1/curso1-form/curso1-form.component';
import { EixoListComponent } from './eixo/eixo-list/eixo-list.component';
import { EixoFormComponent } from './eixo/eixo-form/eixo-form.component';
import { SalaAula1ListComponent } from './sala-aula1/sala-aula1-list/sala-aula1-list.component';
import { SalaAula1FormComponent } from './sala-aula1/sala-aula1-form/sala-aula1-form.component';
import { MestreListComponent } from './mestre/mestre-list/mestre-list.component';
import { MestreFormComponent } from './mestre/mestre-form/mestre-form.component';
import { CursoEixoListComponent } from './cursoEixo/curso-eixo-list/cursoEixo-list.component';
import { CursoEixoFormComponent } from './cursoEixo/curso-eixo-form/curso-eixo-form.component';
import { EquipeListComponent } from './equipe/equipe-list/equipe-list.component';
import { EquipeFormComponent } from './equipe/equipe-form/equipe-form.component';
import { AtividadeListComponent } from './atividade/atividade-list/atividade-list.component';
import { AtividadeFormComponent } from './atividade/atividade-form/atividade-form.component';
import { Aluno1ListComponent } from './aluno1/aluno1-list/aluno1-list.component';
import { Aluno1FormComponent } from './aluno1/aluno1-form/aluno1-form.component';
import { AtividadeEixoListComponent } from './atividade-eixo/atividade-eixo-list/atividade-eixo-list.component';
import { AtividadeEixoFormComponent } from './atividade-eixo/atividade-eixo-form/atividade-eixo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    UiComponent,
    MainMenuComponent,
    MainFooterComponent,
    CursoListComponent,
    CursoFormComponent,
    TurmaListComponent,
    TurmaFormComponent,
    Curso1ListComponent,
    Curso1FormComponent,
    EixoListComponent,
    EixoFormComponent,
    SalaAula1ListComponent,
    SalaAula1FormComponent,
    MestreListComponent,
    MestreFormComponent,
    CursoEixoListComponent,
    CursoEixoFormComponent,
    EquipeListComponent,
    EquipeFormComponent,
    AtividadeListComponent,
    AtividadeFormComponent,
    Aluno1ListComponent,
    Aluno1FormComponent,
    AtividadeEixoListComponent,
    AtividadeEixoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
      // No app.module.ts, dentro seção providers
  /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  /**********************************************/ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
