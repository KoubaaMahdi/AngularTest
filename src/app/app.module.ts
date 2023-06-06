import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SearchComponent } from './components/search/search.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatPersonComponent } from './components/chat-person/chat-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MessagesComponent,
    SearchComponent,
    ChatComponent,
    ChatPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
