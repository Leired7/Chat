import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { SendBarComponent } from './pages/contact/send-bar/send-bar.component';
import { MimimiPipe } from './mimimi.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './pages/contact/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SendBarComponent,
    MimimiPipe,
    UserComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
