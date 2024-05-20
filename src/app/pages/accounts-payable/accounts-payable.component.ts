import { Component, OnInit, ViewChild } from '@angular/core';
import { contas_pagar } from '../localdata';
import { ContasPagarService } from '../Reqi';


@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrl: './accounts-payable.component.css'
})

export class AccountsPayableComponent implements OnInit {

  vizualizaConta: boolean = false;
  relatorio: boolean = false;
  descricao: string = '';
  valor: number = 0;
  empresa: string = '';
  data_vencimento: string = '';

  listaContaPagar = [{
    id: '100',
    descricao: 'Venda de computadores',
    valor: 1000.00,
    empresa: 'NTT',
    data_vencimento: '2024-10-05'
  }];

   ContaPagar : contas_pagar = {
    id: '100',
    descricao: 'Venda de computadores',
    valor: 1000.00,
    empresa: 'NTT',
    data_vencimento: '2024-10-05'
  }

  listaContasPagar : contas_pagar[] = [];

  constructor(private contasPagarService: ContasPagarService) {
  }


  ngOnInit() {
    this.obterContasPagar();
  }

  obterContasPagar() { // Obtém as contas do servidor e atualiza a lista de contas a pagar
    this.contasPagarService.obterContasPagar().subscribe(
      data => {
        this.listaContaPagar = data;
      },
      error => {
        console.error('Erro ao obter contas a pagar:', error);
      }
    );
  }

  vizualizarContas() { // Define a flag 'vizualizaConta' como true para visualizar as contas e false para ocultar o relatório
    this.vizualizaConta = true;
    this.relatorio = false;
  }

  ordenarPorValor() {// Obtém as contas do servidor e ordena a lista de contas a pagar por valor
    this.contasPagarService.obterContasPagar().subscribe(
      data => {
        this.listaContaPagar = data.sort((a, b) => a.valor - b.valor);
      },
      error => {
        console.error('Erro ao obter contas a pagar:', error);
      }
    );
  }
  
  ordenarPorDataVencimento() {// Obtém as contas do servidor e ordena a lista de contas a pagar por data de vencimento
    this.contasPagarService.obterContasPagar().subscribe(
      data => {
        this.listaContaPagar = data.sort((a, b) => new Date(a.data_vencimento).getTime() - new Date(b.data_vencimento).getTime());
      },
      error => {
        console.error('Erro ao obter contas a pagar:', error);
      }
    );
  }
  

  cadastrarConta() {// Cadastra uma nova conta a pagar, adicionando-a ao servidor e atualizando a lista de contas a pagar
    const novaConta: contas_pagar = {
      id: (this.listaContaPagar.length + 1).toString(),
      descricao: this.descricao,
      valor: this.valor,
      empresa: this.empresa,
      data_vencimento: this.data_vencimento
    };
    
    this.contasPagarService.adicionarContaPagar(novaConta).subscribe(
      response => {
        console.log('Conta cadastrada com sucesso:', response);
        this.obterContasPagar(); 
      },
      error => {
        console.error('Erro ao cadastrar conta:', error);
      }
    );

  }

}
