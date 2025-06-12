import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GastoService } from '../../../../database/services/gasto.service';
import { IGasto } from '../../../../database/models/gasto.model';

@Component({
  selector: 'app-card-cadastro-gasto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-cadastro-gasto.component.html',
  styleUrl: './card-cadastro-gasto.component.css'
})
export class CardCadastroGastoComponent {
  gasto: IGasto = {
    descricao: '',
    categoria: '',
    formaPagamento: '',
    data: '',
    valor: 0
  };

  constructor(private gastoService: GastoService, private router: Router) {}

  cadastrar() {
    this.gastoService.cadastrarGasto(this.gasto).subscribe(() => {
      alert('Gasto cadastrado com sucesso!');
      this.router.navigate(['/dashboard']);
    });
  }

  limpar() {
    this.gasto = { descricao: '', categoria: '', formaPagamento: '', data: '', valor: 0 };
  }
}
