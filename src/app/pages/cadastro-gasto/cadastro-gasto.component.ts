import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';
import { CardCadastroGastoComponent } from '../../components/card-cadastro-gasto/card-cadastro-gasto.component';

@Component({
  selector: 'app-cadastro-gasto',
  imports: [RouterModule, NavBarLateralComponent, CardCadastroGastoComponent],
  templateUrl: './cadastro-gasto.component.html',
  styleUrl: './cadastro-gasto.component.css'
})
export class CadastroGastoComponent {

}
