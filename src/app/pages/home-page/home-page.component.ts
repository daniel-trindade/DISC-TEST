import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, ButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
