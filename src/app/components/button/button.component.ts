import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() height: string = '40px'; // valor padrão
  @Input() width: string = '100px'; // valor padrão
  @Input() label: string = 'Button'; // label para o botão
  @Output() clicked: EventEmitter<any> = new EventEmitter()

  handleClick(){
    this.clicked.emit()
  }
}
