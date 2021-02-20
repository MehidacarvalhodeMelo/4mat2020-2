import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from 'src/app/professor/professor.service';
import { SalaAula1Service } from 'src/app/sala-aula1/sala-aula1.service';
import { MestreService } from 'src/app/mestre/mestre.service';

@Component({
    selector: 'app-inicial',
    templateUrl: './inicial.component.html',
    styleUrls: ['./inicial.component.scss']
})
export class InicialComponent{
    title: string = 'Essa é a tela inicial'
}       