import { Component, OnInit } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";

import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { DataService } from "../../data.service";
import { Console } from "node:console";

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
  holdResult: string[] = []

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(data.questions.question_1.atributo1);
      this.setOptions();
    });
  }

  //FUNÇÃO PARA VALIDAR OPÇÃO DO USUÁRIO
  handleOption(option: any) {
    if(option=='A'){
      this.setFalseAll()
      this.selection1=!this.selection1
      console.log(option)
    }
    if(option=='B'){
      this.setFalseAll()
      this.selection2=!this.selection2
      console.log(option)
    }
    if(option=='C'){
      this.setFalseAll()
      this.selection3=!this.selection3
      console.log(option)
    }
    if(option=='D'){
      this.setFalseAll()
      this.selection4=!this.selection4
      console.log(option)
    }
  }


  //FUNÇÃO ATRIBUIDA AO BOTÃO PROXIMO: FAZ AS CHAMADAS NECESSÁRIAS PARA ATUALIZAR A TELA A CADA PASSO
  nextBlock() {
    this.questionBlock++;
    this.setOptions();
    this.setProgressBar();
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
  setFalseAll(){
    this.selection1 = false;
    this.selection2 = false;
    this.selection3 = false;
    this.selection4 = false;
  }
}
