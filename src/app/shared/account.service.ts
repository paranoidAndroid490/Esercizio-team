import { EventEmitter, Injectable, Output } from '@angular/core';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountsListActive = new EventEmitter<Account[]>()
  accountsListInactive = new EventEmitter<Account[]>()
  accountsListHidden = new EventEmitter<Account[]>()


  accountsActive : Account[] = []
  accountsInactive : Account[] = []
  accountsHidden: Account[] = []

  constructor() { }

  addAccount(account:Account){
    if(account.stato === 'Active'){
      this.accountsActive.push(account)
    } else if(account.stato === 'Inactive'){
      this.accountsInactive.push(account)
    } else if(account.stato === 'Hidden'){
      this.accountsHidden.push(account)
    }


  }
  moveAccount(account:Account,oldStato:string){
    if(oldStato === 'Active'){
      let index = this.accountsActive.findIndex(element => element.id === account.id)
      let firstSlice = this.accountsActive.slice(0,index)
      let secondSlice = this.accountsActive.slice(index+1)
      this.accountsActive = [...firstSlice,...secondSlice]
      console.log('sono active')
    } else if(oldStato === 'Inactive'){
      let index = this.accountsInactive.findIndex(element => element.id === account.id)
      let firstSlice = this.accountsInactive.slice(0,index)
      let secondSlice = this.accountsInactive.slice(index+1)
      this.accountsInactive = [...firstSlice,...secondSlice]
      console.log('sono inactive')
    } else if(oldStato === 'Hidden'){
      let index = this.accountsHidden.findIndex(element => element.id === account.id)
      let firstSlice = this.accountsHidden.slice(0,index)
      let secondSlice = this.accountsHidden.slice(index+1)
      this.accountsHidden = [...firstSlice,...secondSlice]
      console.log('sono hidden')
    }
    if(account.stato === 'Active'){
      this.accountsActive.push(account)
      this.accountsListActive.emit(this.accountsActive)
    } else if(account.stato === 'Inactive'){
      this.accountsInactive.push(account)
      this.accountsListInactive.emit(this.accountsInactive)
    } else if(account.stato === 'Hidden'){
      this.accountsHidden.push(account)
      this.accountsListHidden.emit(this.accountsHidden)
    } else {
      console.log('non sto passando niente')
    }



  }




}
