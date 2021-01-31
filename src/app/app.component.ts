import { Component } from '@angular/core';

@Component({
  selector: 'bau-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public arrrayOfMessages: string[] = [];

  public inputValue: string;
  public emptyInput: string = 'Mensaje';

  public sendMessage() {
    this.arrrayOfMessages = [...this.arrrayOfMessages, this.inputValue];

    this.inputValue = '';
  }
}
