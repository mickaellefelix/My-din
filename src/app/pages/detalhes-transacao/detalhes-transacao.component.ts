import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DateComponent } from '../../sharepage/date/date.component';
import { CommonModule } from '@angular/common';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';

@Component({
  selector: 'app-detalhes-transacao',
  imports: [RouterModule, CommonModule, NavBarLateralComponent, DateComponent],
  templateUrl: './detalhes-transacao.component.html',
  styleUrls: ['./detalhes-transacao.component.css']
})
export class DetalhesTransacaoComponent {
  @Input() transacao!: {
    id: number;
    nome: string;
    valor: number;
    tipo: 'ganho' | 'gasto';
    data: Date;
  };

  constructor(private router: Router) {}

  navegarParaDetalhes() {
    this.router.navigate(['/transacao', this.transacao.id]);
  }
}
