import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public user: any;
  public fixedItemsMenu: Array<any> = [];
  public open = false;

  constructor() {

  }

  ngOnInit(): void {
    this.getMenu();
  }


  getMenu() {
    this.fixedItemsMenu = [
      {name: 'Contas a Receber', icon: 'attach_money', route: '/business/accounts-receivable'},
      {name: 'Contas a Pagar', icon: 'attach_money', route: '/business/accounts-payable'},
      {name: 'Cadastro de Pessoa', icon: 'person', route: '/business/people'},
      {name: 'Relatorios', icon: 'insert_chart', route: '/business/report'},
    ];
  }

}