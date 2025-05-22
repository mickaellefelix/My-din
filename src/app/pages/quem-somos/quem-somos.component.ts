import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharepage/navbar/navbar.component';
import { FooterComponent } from '../../sharepage/footer/footer.component';

@Component({
  selector: 'app-quem-somos',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.css'
})
export class QuemSomosComponent {

}
