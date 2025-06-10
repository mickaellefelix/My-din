import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarLateralComponent } from '../../sharepage/nav-bar-lateral/nav-bar-lateral.component';
import { DateComponent } from '../../sharepage/date/date.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, NavBarLateralComponent, DateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
