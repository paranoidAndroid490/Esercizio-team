import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-accounts',
  templateUrl: './display-accounts.component.html',
  styleUrls: ['./display-accounts.component.css']
})
export class DisplayAccountsComponent implements OnInit {

  @Input() accounts
  constructor() { }

  ngOnInit(): void {
  }

}
