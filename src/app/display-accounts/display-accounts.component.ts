import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-display-accounts',
  templateUrl: './display-accounts.component.html',
  styleUrls: ['./display-accounts.component.css']
})
export class DisplayAccountsComponent implements OnInit {

   @Input() titolo
   @Input() accounts
  // accounts: Account[] = []
  constructor(private accountService:AccountService) {

   }

  ngOnInit(): void {
    this.accountService.accountsListActive.subscribe((accounts:Account[])=>{
      console.log(accounts)
    })
    // this.accountService.accountsListInactive.subscribe((accounts:Account[])=>{
    //   console.log(accounts)
    // })
    // this.accountService.accountsListHidden.subscribe((accounts:Account[])=>{
    //   console.log(accounts)
    // })



  }

}
