import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DateComponent } from '../../sharepage/date/date.component';
import { DetalhesTransacaoComponent } from '../detalhes-transacao/detalhes-transacao.component';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';

interface Transacao {
  id: number;
  nome: string;
  valor: number;
  tipo: 'ganho' | 'gasto';
  data: Date;
}

@Component({
  selector: 'app-historico',
  imports: [RouterModule, NavBarLateralComponent, DateComponent, DetalhesTransacaoComponent],
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  filtro: 'todos' | 'ganho' | 'gasto' = 'todos';

  transacoes: Transacao[] = [
    { id: 1, nome: 'Salário', valor: 5000, tipo: 'ganho', data: new Date('2025-06-01') },
    { id: 2, nome: 'Aluguel', valor: 1500, tipo: 'gasto', data: new Date('2025-06-05') },
    { id: 3, nome: 'Venda', valor: 200, tipo: 'ganho', data: new Date('2025-06-07') }
  ];

  get transacoesFiltradas(): Transacao[] {
    if (this.filtro === 'todos') return this.transacoes;
    return this.transacoes.filter(t => t.tipo === this.filtro);
  }

  selecionarFiltro(tipo: 'todos' | 'ganho' | 'gasto') {
    this.filtro = tipo;
  }
}
