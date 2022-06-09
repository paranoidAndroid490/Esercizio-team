import { Injectable } from '@angular/core';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts : Account[] = []

  constructor() { }

  addAccount(account:Account){
    this.accounts.push(account)
  }
}
