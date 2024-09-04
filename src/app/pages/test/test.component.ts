import { Component, OnInit } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";

import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { DataService } from "../../data.service";

@Component({
  selector: "app-test",
  standalone: true,
  imports: [
    ButtonComponent,
    ProgressBarComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
  providers: [DataService]
})
export class TestComponent {
  option1 = "Preguiçoso";
  option2 = "Ágil";
  option3 = "Gentil";
  option4 = "Feliz";
  progressLabel: number = 15;
  progressBar: number = (this.progressLabel * 100) / 30;

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(data.questions.question_1.atributo1)
    });
  }
}
