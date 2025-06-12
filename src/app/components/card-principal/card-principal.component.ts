import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbackCarouselComponent } from '../feedback-carousel/feedback-carousel.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { RecursosComponent } from '../recursos/recursos.component';

@Component({
  selector: 'app-card-principal',
  imports: [RouterModule, FeedbackCarouselComponent, QuemSomosComponent, RecursosComponent],
  templateUrl: './card-principal.component.html',
  styleUrl: './card-principal.component.css'
})
export class CardPrincipalComponent {

}
