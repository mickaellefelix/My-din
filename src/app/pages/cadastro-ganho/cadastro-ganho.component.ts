import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';
import { CardCadastroGanhoComponent } from '../../components/card-cadastro-ganho/card-cadastro-ganho.component';
import { DateComponent } from '../../sharepage/date/date.component';

@Component({
  selector: 'app-cadastro-ganho',
  imports: [RouterModule, NavBarLateralComponent, CardCadastroGanhoComponent, DateComponent],
  templateUrl: './cadastro-ganho.component.html',
  styleUrl: './cadastro-ganho.component.css'
})
export class CadastroGanhoComponent {

}
