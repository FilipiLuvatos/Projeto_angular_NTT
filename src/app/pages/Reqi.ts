import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contas_pagar } from './localdata';


@Injectable({
  providedIn: 'root'
})
export class ContasPagarService {
  private serverUrl = 'http://localhost:3000'; // Altere para a URL do seu servidor

  constructor(private http: HttpClient) { }

  obterContasPagar(): Observable<contas_pagar[]> {
    return this.http.get<contas_pagar[]>(`${this.serverUrl}/contas-pagar`);
  }

  adicionarContaPagar(conta: contas_pagar): Observable<any> {
    return this.http.post<any>(`${this.serverUrl}/contas-pagar`, conta);
  }
}
