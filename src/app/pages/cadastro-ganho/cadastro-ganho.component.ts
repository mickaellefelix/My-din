import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';
import { CardCadastroGanhoComponent } from '../../components/card-cadastro-ganho/card-cadastro-ganho.component';

@Component({
  selector: 'app-cadastro-ganho',
  imports: [RouterModule, NavBarLateralComponent, CardCadastroGanhoComponent],
  templateUrl: './cadastro-ganho.component.html',
  styleUrl: './cadastro-ganho.component.css'
})
export class CadastroGanhoComponent {

}
