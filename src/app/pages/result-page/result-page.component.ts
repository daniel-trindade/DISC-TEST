import { Component } from "@angular/core";

@Component({
  selector: "app-result-page",
  standalone: true,
  imports: [],
  templateUrl: "./result-page.component.html",
  styleUrl: "./result-page.component.scss",
})
export class ResultPageComponent {
  constructor() {}

  dominance: number = 0;
  influence: number = 0;
  steadness: number = 0;
  conscientiousness: number = 0;
  dom: string = "";
  inf: string = "";
  ste: string = "";
  con: string = "";

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();

    const savedData = sessionStorage.getItem('resultData');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.dominance = parsedData.a;
      this.influence = parsedData.b;
      this.steadness = parsedData.c;
      this.conscientiousness = parsedData.d;
    }

    //PERCENTIL VALUES
    this.dom = ((this.dominance * 100) / 28).toFixed(2);
    this.inf = ((this.influence * 100) / 28).toFixed(2);
    this.ste = ((this.steadness * 100) / 28).toFixed(2);
    this.con = ((this.conscientiousness * 100) / 28).toFixed(2);
  }
}
