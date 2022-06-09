import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-display-accounts',
  templateUrl: './display-accounts.component.html',
  styleUrls: ['./display-accounts.component.css']
})
export class DisplayAccountsComponent implements OnInit {

  // @Input() accounts
  accounts: Account[]
  constructor(private accountService:AccountService) {
this.accounts = accountService.accounts
   }

  ngOnInit(): void {
  }

}
