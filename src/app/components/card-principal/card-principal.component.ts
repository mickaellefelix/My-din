import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbackCarouselComponent } from '../feedback-carousel/feedback-carousel.component';

@Component({
  selector: 'app-card-principal',
  imports: [RouterModule, FeedbackCarouselComponent],
  templateUrl: './card-principal.component.html',
  styleUrl: './card-principal.component.css'
})
export class CardPrincipalComponent {

}
