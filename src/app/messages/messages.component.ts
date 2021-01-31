import { Component, Input } from '@angular/core';

@Component({
  selector: 'bau-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  @Input() public inputMessagesFromApp: string[] = [];

  public date: Date = new Date();
  public hour: string = this.date.getHours().toLocaleString();
  public minute: string = this.date.getMinutes().toLocaleString();

  public sendTime = `${this.hour}:${
    this.minute.length == 1 ? `0${this.minute}` : `${this.minute}`
  }`;
}
