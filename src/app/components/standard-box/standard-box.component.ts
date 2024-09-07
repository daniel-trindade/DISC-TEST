import { Component, Input } from "@angular/core";

@Component({
  selector: "app-standard-box",
  standalone: true,
  imports: [],
  templateUrl: "./standard-box.component.html",
  styleUrl: "./standard-box.component.scss",
})
export class StandardBoxComponent {
  @Input() label = "";
  @Input() value: string = "";
}
