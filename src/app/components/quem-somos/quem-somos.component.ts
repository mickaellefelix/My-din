import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharepage/navbar/navbar.component';
import { FooterComponent } from '../../sharepage/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FeedbackCarouselComponent } from '../feedback-carousel/feedback-carousel.component';

@Component({
  selector: 'app-quem-somos',
  imports: [NavbarComponent, FooterComponent, RouterModule, FeedbackCarouselComponent],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.css'
})
export class QuemSomosComponent {

}
