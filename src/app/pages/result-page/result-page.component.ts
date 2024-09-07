import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StandardBoxComponent } from "../../components/standard-box/standard-box.component";
import { ConscientiousnessComponent } from "../../disc/conscientiousness/conscientiousness.component";
import { DominanceComponent } from "../../disc/dominance/dominance.component";
import { SteadnessComponent } from "../../disc/steadness/steadness.component";
import { InfluenceComponent } from "../../disc/influence/influence.component";

@Component({
  selector: "app-result-page",
  standalone: true,
  imports: [
    CommonModule,
    StandardBoxComponent,
    ConscientiousnessComponent,
    DominanceComponent,
    SteadnessComponent,
    InfluenceComponent
],
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
  result: number = 0;
  attribute: string = "";

  ngOnInit() {
    const savedData = sessionStorage.getItem("resultData");

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
    this.checkResult();
  }

  checkResult() {
    this.result = this.dominance;
    this.attribute = "dominace";
    if (this.influence > this.result) {
      this.result = this.influence;
      this.attribute = "influence";
    }
    if (this.steadness > this.result) {
      this.result = this.steadness;
      this.attribute = "steadness";
    }
    if (this.conscientiousness > this.result) {
      this.result = this.conscientiousness;
      this.attribute = "conscientiousness";
    }
    console.log("calculo realizado", this.attribute, this.result);
  }
}
