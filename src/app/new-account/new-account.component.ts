import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Account } from '../shared/account.model';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output() saveAccount = new EventEmitter<Account>()

  constructor() { }

  ngOnInit(): void {
  }

  onCreateAccount(nome:HTMLInputElement,tipo:HTMLInputElement,stato:HTMLSelectElement){
    let account = new Account(nome.value,tipo.value,stato.value)
    this.saveAccount.emit(account)
  }

}
