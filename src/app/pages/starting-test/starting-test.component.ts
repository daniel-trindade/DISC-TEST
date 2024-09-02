import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-starting-test',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './starting-test.component.html',
  styleUrl: './starting-test.component.scss'
})
export class StartingTestComponent {

}
