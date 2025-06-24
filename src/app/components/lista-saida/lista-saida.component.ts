import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../../../database/services/gasto.service';
import { IGasto } from '../../../../database/models/gasto.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-saida',
  templateUrl: './lista-saida.component.html',
  styleUrls: ['./lista-saida.component.css'],
  imports: [RouterModule, CommonModule],
})
export class ListaSaidaComponent implements OnInit {
  gastos: IGasto[] = [];

  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.gastoService.getGastos().subscribe((data) => {
      this.gastos = data;
    });
  }
}