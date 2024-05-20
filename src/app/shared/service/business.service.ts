import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private urlApi = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  //  CHAMADA PARA PEGAR AS CONTAS A PAGAR
  getAccountsPayable() {
    return this.httpClient.get(this.urlApi + 'contas-pagar');
  }

  //  CHAMADA PARA PEGAR AS CONTAS A RECEBER
  getAccountsReceivable() {
    return this.httpClient.get(this.urlApi + 'contas-receber');
  }

  //  CHAMADA PARA PEGAR AS PESSOAS
  getPeople() {
    return this.httpClient.get(this.urlApi + 'pessoas');
  }
}
