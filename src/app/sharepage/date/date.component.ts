import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {
    mes: string = '';
    dia: string = '';
    ano: string = '';

    constructor() {
      this.definirData();
    }

  definirData(): void {
    const data = new Date();
    const opcoesMes: Intl.DateTimeFormatOptions = { month: 'long' };
    
    const mesBruto = data.toLocaleDateString('pt-BR', opcoesMes);
    this.mes = mesBruto.charAt(0).toUpperCase() + mesBruto.slice(1); // Capitaliza o mês

    this.dia = data.getDate().toString().padStart(2, '0');
    this.ano = data.getFullYear().toString();
  }
}
