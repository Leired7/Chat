import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bau-send-bar',
  templateUrl: './send-bar.component.html',
  styleUrls: ['./send-bar.component.css'],
})
export class SendBarComponent {
  @Input() public buttonText: string;

  @Output() public outputActionButton = new EventEmitter();

  public inputValue: string;
  public emptyInput: string = 'Mensaje';

  public sendMessageToApp() {
    if (this.inputValue !== undefined) {
      this.outputActionButton.emit(this.inputValue);

      this.inputValue = undefined;
    }
  }
}
