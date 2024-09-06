import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.scss'
})
export class ResultPageComponent {
  @Input() dominance: number = 4;
  @Input() influence: number = 15;
  @Input() steadness: number = 4;
  @Input() conscientiousness: number = 5;

  //PERCENTIL VALUES
  dom = ((this.dominance*100)/28).toFixed(2)
  inf = ((this.influence*100)/28).toFixed(2)
  ste = ((this.steadness*100)/28).toFixed(2)
  con = ((this.conscientiousness*100)/28).toFixed(2)

}
