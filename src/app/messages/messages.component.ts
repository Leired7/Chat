import { Component, Input } from '@angular/core';

@Component({
  selector: 'bau-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  @Input() public inputMessagesFromApp: string[] = [];
}
