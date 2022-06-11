import { Component, OnInit } from '@angular/core';
import { Account } from './shared/account.model';
import { AccountService } from './shared/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  active: Account[]
  inactive: Account[]
  hidden: Account[]


  constructor(private accountService:AccountService){
    this.active = accountService.accountsActive
    this.inactive = accountService.accountsInactive
    this.hidden = accountService.accountsHidden
  }

  ngOnInit() {
    this.accountService.accountsListActive.subscribe((accounts:Account[])=>{
      this.active = accounts
    })
    this.accountService.accountsListInactive.subscribe((accounts:Account[])=>{
      this.inactive = accounts
    })
    this.accountService.accountsListHidden.subscribe((accounts:Account[])=>{
      this.hidden = accounts
    })
  }


  //accounts: Account[] = []

  // onSaveAccount(account:Account){
  //   this.accounts.push(account)
  // }
}
