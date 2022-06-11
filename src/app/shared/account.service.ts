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
  moveAccount(account: Account, oldStato: string) {
    // if(oldStato === 'Active'){
    //   let index = this.accountsActive.findIndex(element => element.id === account.id)
    //   let firstSlice = this.accountsActive.slice(0,index)
    //   let secondSlice = this.accountsActive.slice(index+1)
    //   this.accountsActive = [...firstSlice,...secondSlice]
    //   console.log('sono active')
    // } else if(oldStato === 'Inactive'){
    //   let index = this.accountsInactive.findIndex(element => element.id === account.id)
    //   let firstSlice = this.accountsInactive.slice(0,index)
    //   let secondSlice = this.accountsInactive.slice(index+1)
    //   this.accountsInactive = [...firstSlice,...secondSlice]
    //   console.log('sono inactive')
    // } else if(oldStato === 'Hidden'){
    //   let index = this.accountsHidden.findIndex(element => element.id === account.id)
    //   let firstSlice = this.accountsHidden.slice(0,index)
    //   let secondSlice = this.accountsHidden.slice(index+1)
    //   this.accountsHidden = [...firstSlice,...secondSlice]
    //   console.log('sono hidden')
    // }
    switch (oldStato) {
      case 'Active':
        let indexActive = this.accountsActive.findIndex(
          (element) => element.id === account.id
        );
        let firstSliceActive = this.accountsActive.slice(0, indexActive);
        let secondSliceActive = this.accountsActive.slice(indexActive + 1);
        this.accountsActive = [...firstSliceActive, ...secondSliceActive];
        break;
      case 'Inactive':
        let indexInactive = this.accountsInactive.findIndex(
          (element) => element.id === account.id
        );
        let firstSliceInactive = this.accountsInactive.slice(0, indexInactive);
        let secondSliceInactive = this.accountsInactive.slice(indexInactive + 1);
        this.accountsInactive = [...firstSliceInactive, ...secondSliceInactive];
        break;
      case 'Hidden':
        let index = this.accountsHidden.findIndex(element => element.id === account.id)
      let firstSlice = this.accountsHidden.slice(0,index)
      let secondSlice = this.accountsHidden.slice(index+1)
      this.accountsHidden = [...firstSlice,...secondSlice]
    }
    if (account.stato === 'Active') {
      this.accountsActive.push(account);

    } else if (account.stato === 'Inactive') {
      this.accountsInactive.push(account);

    } else if (account.stato === 'Hidden') {
      this.accountsHidden.push(account);

    } else {
      console.log('non sto passando niente');
    }
    this.accountsListActive.emit(this.accountsActive);
    this.accountsListInactive.emit(this.accountsInactive);
    this.accountsListHidden.emit(this.accountsHidden);
  }
}
