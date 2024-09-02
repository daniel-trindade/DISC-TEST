import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonComponent, ProgressBarComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  option1 = "Preguiçoso"
  option2 = "Ágil"
  option3 = "Gentil"
  option4 = "Feliz"
  progressLabel: number = 15
  progressBar: number = ((this.progressLabel*100)/30)
}
