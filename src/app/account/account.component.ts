import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../shared/account.model';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account
  @Input() index

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {

    this.account.id = this.index


  }

  onChangeStato(stato:string){
    let oldStato = this.account.stato
    if(stato === 'Active'){
      this.account.stato = 'Active'
      this.account.setActive()
    } else if (stato === 'Inactive'){
      this.account.stato = 'Inactive'
      this.account.setInactive()
    } else {
      this.account.stato = 'Hidden'
      this.account.setHidden()
    }

    this.accountService.moveAccount(this.account,oldStato)

  }

  onRemoveAccount(){
    this.accountService.removeAccount(this.account,this.account.stato,true)
  }


}
