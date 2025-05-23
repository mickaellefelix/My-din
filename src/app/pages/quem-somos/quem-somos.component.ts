import { Component } from '@angular/core';
import { NavbarComponent } from '../../sharepage/navbar/navbar.component';
import { FooterComponent } from '../../sharepage/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FeedbackCarouselComponent } from '../../components/feedback-carousel/feedback-carousel.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';

@Component({
  selector: 'app-quem-somos',
  imports: [NavbarComponent, FooterComponent, RouterModule, FeedbackCarouselComponent, AboutSectionComponent],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.css'
})
export class QuemSomosComponent {

}
