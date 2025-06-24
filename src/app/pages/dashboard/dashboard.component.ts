import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';
import { DateComponent } from '../../sharepage/date/date.component';
import { GraficoComponent } from '../../components/grafico/grafico.component';
import { ListaEntradaComponent } from '../../components/lista-entrada/lista-entrada.component';
import { ListaSaidaComponent } from '../../components/lista-saida/lista-saida.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, NavBarLateralComponent, DateComponent, GraficoComponent, ListaEntradaComponent, ListaSaidaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
