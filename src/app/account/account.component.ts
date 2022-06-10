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

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  onChangeStato(id:string){
    let oldStato = this.account.stato
    if(id === 'Active'){
      this.account.stato = 'Active'
      this.account.setActive()
    } else if (id === 'Inactive'){
      this.account.stato = 'Inactive'
      this.account.setInactive()
    } else {
      this.account.stato = 'Hidden'
      this.account.setHidden()
    }

    this.accountService.moveAccount(this.account,oldStato)

  }


}
