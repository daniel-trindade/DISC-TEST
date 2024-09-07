import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-result-page",
  standalone: true,
  imports: [],
  templateUrl: "./result-page.component.html",
  styleUrl: "./result-page.component.scss",
})
export class ResultPageComponent {
  constructor(private router: Router) {}

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
    if (navigation?.extras.state) {
      console.log('entrou', navigation)
      this.dominance = navigation.extras.state["dominance"];
      this.influence = navigation.extras.state["influence"];
      this.steadness = navigation.extras.state["steadness"];
      this.conscientiousness = navigation.extras.state["conscientiousness"];
    }

    //PERCENTIL VALUES
    this.dom = ((this.dominance * 100) / 28).toFixed(2);
    this.inf = ((this.influence * 100) / 28).toFixed(2);
    this.ste = ((this.steadness * 100) / 28).toFixed(2);
    this.con = ((this.conscientiousness * 100) / 28).toFixed(2);
  }
}
