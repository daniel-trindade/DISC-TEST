import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flash-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-message.component.html',
  styleUrl: './flash-message.component.scss'
})
export class FlashMessageComponent {
  @Input() message: string = ''
  @Input() showMessage: boolean = false
}
