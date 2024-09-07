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
  @Input() height: string = '40px';
  @Input() width: string = '100px';
  @Input() label: string = 'Button';
  @Input() font: string = '20pt';
  @Input() selected: boolean = false
  @Output() clicked: EventEmitter<any> = new EventEmitter()

  handleClick(){
    this.clicked.emit()
  }
}
