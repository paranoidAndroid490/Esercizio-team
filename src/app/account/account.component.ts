import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStato(id:string){
    if(id === 'active'){
      this.account.stato = 'Active'
      this.account.setActive()
    } else if (id === 'inactive'){
      this.account.stato = 'Inactive'
      this.account.setInactive()
    } else {
      this.account.stato = 'Hidden'
      this.account.setHidden()
    }
  }

}
