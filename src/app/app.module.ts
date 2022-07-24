import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Web3Wrapper } from './react-components/Web3Login/Web3Wrapper';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    Web3Wrapper,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
