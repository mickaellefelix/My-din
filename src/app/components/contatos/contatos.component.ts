import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharepage/navbar/navbar.component';
import { FooterComponent } from '../../sharepage/footer/footer.component';

@Component({
  selector: 'app-contatos',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {

}
