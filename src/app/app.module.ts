import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { DisplayAccountsComponent } from './display-accounts/display-accounts.component';
import { AccountComponent } from './account/account.component';
import { BackgroundControlDirective } from './background-control/background-control.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    DisplayAccountsComponent,
    AccountComponent,
    BackgroundControlDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
