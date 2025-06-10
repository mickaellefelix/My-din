import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';
import { DateComponent } from '../../sharepage/date/date.component';
import { CardTipoComponent } from '../../components/card-tipo/card-tipo.component';

@Component({
  selector: 'app-tipo-transacao',
  imports: [RouterModule, NavBarLateralComponent, DateComponent, CardTipoComponent],
  templateUrl: './tipo-transacao.component.html',
  styleUrl: './tipo-transacao.component.css'
})
export class TipoTransacaoComponent {

}
