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
  providers: [DataService],
})
export class TestComponent {
  constructor(private dataService: DataService) {}

  data: any;
  questionBlock: number = 1;

  option1: string = "";
  option2: string = "";
  option3: string = "";
  option4: string = "";
  selection1: boolean = false;
  selection2: boolean = false;
  selection3: boolean = false;
  selection4: boolean = false;
  progressBar: number = 0;
  holdOption: string = "";
  holdResult: string[] = [];

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      this.setOptions();
    });
  }

  //FUNÇÃO PARA VALIDAR OPÇÃO DO USUÁRIO
  handleOption(option: any) {
    if (option == "A") {
      this.setFalseAll();
      this.selection1 = !this.selection1;
      this.holdOption = "A";
    }
    if (option == "B") {
      this.setFalseAll();
      this.selection2 = !this.selection2;
      this.holdOption = "B";
    }
    if (option == "C") {
      this.setFalseAll();
      this.selection3 = !this.selection3;
      this.holdOption = "C";
    }
    if (option == "D") {
      this.setFalseAll();
      this.selection4 = !this.selection4;
      this.holdOption = "D";
    }
  }

  //FUNÇÃO ATRIBUIDA AO BOTÃO "PROXIMO": FAZ AS CHAMADAS NECESSÁRIAS PARA ATUALIZAR A TELA A CADA PASSO
  nextBlock() {
    if (this.holdOption) {
      this.questionBlock++;
      this.setOptions();
      this.setProgressBar();
      this.holdResult.push(this.holdOption);
      console.log(this.holdResult);
      this.setFalseAll();
    } else {
      console.log("não entrou");
    }
  }

  //FUNÇÃO PARA TROCAR OS ATRIBUTOS
  setOptions() {
    this.option1 =
      this.data.questions[`question_${this.questionBlock}`]?.atributo1;
    this.option2 =
      this.data.questions[`question_${this.questionBlock}`]?.atributo2;
    this.option3 =
      this.data.questions[`question_${this.questionBlock}`]?.atributo3;
    this.option4 =
      this.data.questions[`question_${this.questionBlock}`]?.atributo4;
  }

  //FUNÇÃO PARA ATUALIZAR A BARRA DE PROGRESSO
  setProgressBar() {
    this.progressBar = (this.questionBlock * 100) / 28;
  }

  //FUNÇÃO AUXILIAR PARA SETAR FALSE EM OPTIONS
  setFalseAll() {
    this.holdOption = "";
    this.selection1 = false;
    this.selection2 = false;
    this.selection3 = false;
    this.selection4 = false;
  }

  showResult() {
    if (this.holdOption) {
      let a: number = 0;
      let b: number = 0;
      let c: number = 0;
      let d: number = 0;

      this.holdResult.push(this.holdOption);

      for (let i = 0; i < this.holdResult.length; i++) {
        if (this.holdResult[i] == "A") {
          a++;
        }
        if (this.holdResult[i] == "B") {
          b++;
        }
        if (this.holdResult[i] == "C") {
          c++;
        }
        if (this.holdResult[i] == "D") {
          d++;
        }
      }
      console.log(a, " -- ", b, " -- ", c, " -- ", d);

      window.location.href = "/resultado";
    } else {
      console.log("escolha uma opção");
    }
  }
}
