import { Component } from '@angular/core';
import { Account } from './shared/account.model';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  active: Account[]
  inactive: Account[]
  hidden: Account[]


  constructor(private accountService:AccountService){
    this.active = accountService.accountsActive
    console.log(this.active)
    this.inactive = accountService.accountsInactive
    console.log(this.inactive)
    this.hidden = accountService.accountsHidden
    console.log(this.hidden)
  }


  //accounts: Account[] = []

  // onSaveAccount(account:Account){
  //   this.accounts.push(account)
  // }
}
