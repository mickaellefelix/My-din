import { Component, OnInit } from '@angular/core';
import { GanhoService } from '../../../../database/services/ganho.service';
import { IGanho } from '../../../../database/models/ganho.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-entrada',
  templateUrl: './lista-entrada.component.html',
  styleUrls: ['./lista-entrada.component.css'],
  imports: [RouterModule, CommonModule],
})
export class ListaEntradaComponent implements OnInit {
  ganhos: IGanho[] = [];

  constructor(private ganhoService: GanhoService) {}

  ngOnInit(): void {
    this.ganhoService.getGanhos().subscribe((data) => {
      this.ganhos = data;
    });
  }
}
