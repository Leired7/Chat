import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'bau-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnChanges {
  @Input() public arrayUserFromApp: any = [];

  ngOnChanges() {
    console.log('user', this.arrayUserFromApp);
  }
}
