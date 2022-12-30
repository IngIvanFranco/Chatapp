import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { IndexComponent } from './componentes/index/index.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
