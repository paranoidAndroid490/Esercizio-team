import { Component } from '@angular/core';
import { Account } from './shared/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts: Account[] = []

  onSaveAccount(account:Account){
    this.accounts.push(account)
  }
}
