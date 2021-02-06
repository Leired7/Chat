import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'bau-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public arrayMessagesInApp: string[] = [];
  public arrayUsersInApp: any[] = [];

  constructor(private usersService: UsersService) {}

  public sendMessageFromAppToMessagesComponent(incommingMessage: string) {
    if (incommingMessage !== '')
      this.arrayMessagesInApp = [...this.arrayMessagesInApp, incommingMessage];
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.arrayUsersInApp = [...this.arrayUsersInApp, ...users.results];
      console.log('arrayUsers', this.arrayUsersInApp);
    });
  }
}
