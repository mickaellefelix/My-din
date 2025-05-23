import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';
import { CardConfiguracoesComponent } from '../../components/card-configuracoes/card-configuracoes.component';

@Component({
  selector: 'app-configuracoes',
  imports: [RouterModule, NavBarLateralComponent, CardConfiguracoesComponent],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.css'
})
export class ConfiguracoesComponent {

}
