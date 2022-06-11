import { EventEmitter, Injectable, Output } from '@angular/core';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountsListActive = new EventEmitter<Account[]>();
  accountsListInactive = new EventEmitter<Account[]>();
  accountsListHidden = new EventEmitter<Account[]>();

  accountsActive: Account[] = [];
  accountsInactive: Account[] = [];
  accountsHidden: Account[] = [];

  constructor() {}

  addAccount(account: Account) {
    if (account.stato === 'Active') {
      this.accountsActive.push(account);
    } else if (account.stato === 'Inactive') {
      this.accountsInactive.push(account);
    } else if (account.stato === 'Hidden') {
      this.accountsHidden.push(account);
    }
  }

  removeAccount(account: Account, stato: string, updateAccounts: boolean) {
    if (stato === 'Active') {
      let firstSlice = this.accountsActive.slice(0, account.id);
      let secondSlice = this.accountsActive.slice(account.id + 1);
      this.accountsActive = [...firstSlice, ...secondSlice];
      this.udpadeIds(this.accountsActive)
      if (updateAccounts) {
        this.accountsListActive.emit(this.accountsActive);
      }
    } else if (stato === 'Inactive') {
      let firstSlice = this.accountsInactive.slice(0, account.id);
      let secondSlice = this.accountsInactive.slice(account.id + 1);
      this.accountsInactive = [...firstSlice, ...secondSlice];
      this.udpadeIds(this.accountsInactive)
      if (updateAccounts) {
        this.accountsListInactive.emit(this.accountsInactive);
      }
    } else if (stato === 'Hidden') {
      let firstSlice = this.accountsHidden.slice(0, account.id);
      let secondSlice = this.accountsHidden.slice(account.id + 1);
      this.accountsHidden = [...firstSlice, ...secondSlice];
      this.udpadeIds(this.accountsHidden)
      if (updateAccounts) {
        this.accountsListHidden.emit(this.accountsHidden);
      }
    }
  }

  moveAccount(account: Account, oldStato: string) {
    this.removeAccount(account, oldStato, false);
    this.addAccount(account);
    this.accountsListActive.emit(this.accountsActive);
    this.accountsListInactive.emit(this.accountsInactive);
    this.accountsListHidden.emit(this.accountsHidden);
  }

  udpadeIds(accounts:Account[]){
    for (let i = 0; i<accounts.length; i++){
      accounts[i].id = i
    }
  }


}
