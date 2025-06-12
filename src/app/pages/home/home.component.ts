import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharepage/navbar/navbar.component';
import { FooterComponent } from '../../sharepage/footer/footer.component';
import { CardPrincipalComponent } from '../../components/card-principal/card-principal.component';
import { QuemSomosComponent } from '../../components/quem-somos/quem-somos.component';
import { RecursosComponent } from '../../components/recursos/recursos.component';
import { FeedbackCarouselComponent } from '../../components/feedback-carousel/feedback-carousel.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CardPrincipalComponent, QuemSomosComponent, RecursosComponent, FeedbackCarouselComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
