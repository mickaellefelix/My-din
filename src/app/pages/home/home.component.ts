import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharepage/navbar/navbar.component';
import { FooterComponent } from '../../sharepage/footer/footer.component';
import { CardPrincipalComponent } from '../../components/card-principal/card-principal.component';
import { CardSecundarioComponent } from '../../components/card-secundario/card-secundario.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CardPrincipalComponent, CardSecundarioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
