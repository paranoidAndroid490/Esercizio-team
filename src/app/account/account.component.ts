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
      this.account.active = true
      this.account.inactive = false
      this.account.hidden = false
    } else if (id === 'inactive'){
      this.account.stato = 'Inactive'
      this.account.inactive = true
      this.account.active = false
      this.account.hidden = false
    } else {
      this.account.stato = 'Hidden'
      this.account.hidden = true
      this.account.active = false
      this.account.inactive = false
    }
  }

}
