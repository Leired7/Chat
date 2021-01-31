import { Component } from '@angular/core';

@Component({
  selector: 'bau-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public arrayMessagesInApp: string[] = [];

  public sendMessageFromAppToMessagesComponent(incommingMessage: string) {
    if (incommingMessage !== '')
      this.arrayMessagesInApp = [...this.arrayMessagesInApp, incommingMessage];
  }
}
