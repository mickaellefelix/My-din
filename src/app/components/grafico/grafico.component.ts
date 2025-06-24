import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GanhoService } from '../../../../database/services/ganho.service';
import { GastoService } from '../../../../database/services/gasto.service';

import { IGanho } from '../../../../database/models/ganho.model';
import { IGasto } from '../../../../database/models/gasto.model';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent implements OnInit {
  totalGanhos: number = 0;
  totalGastos: number = 0;

  constructor(
    private ganhoService: GanhoService,
    private gastoService: GastoService
  ) {}

  ngOnInit(): void {
    this.ganhoService.getGanhos().subscribe((ganhos: IGanho[]) => {
      this.totalGanhos = ganhos.reduce((acc, ganho) => acc + ganho.valor, 0);
    });

    this.gastoService.getGastos().subscribe((gastos: IGasto[]) => {
      this.totalGastos = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
    });
  }
}
