import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../../shared/service/business.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  public pieChartOptions: any = { responsive: false, };
  public pieChartLabels = ['Contas a Receber', 'Contas a Pagar'];
  public pieChartDatasets = [{ data: [0, 0] }];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public lineChartData: any = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setempro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 40, 50, 60, 70, 30],
        label: 'Contas a Receber',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: any = {
    responsive: false
  };
  public lineChartLegend = true;

  public payable: any;
  public receivable: any;
  public loading: boolean;


  constructor(private businessService: BusinessService) {
    this.loading = true;
  }

  ngOnInit() {
    this.getAccountsPayable();

  }

  getAccountsPayable() {
    // FAZ A CHAMADA NA SERVICE PARA CONSUMIR INFORMAÇÕES DA API MOCK 
    this.businessService.getAccountsPayable().subscribe((res: any) => {
      this.payable = res;
      this.pieChartDatasets[0].data[1] = Number(res.length);
      this.getAccountsReceivable();
    })
  }

  getAccountsReceivable() {
    this.businessService.getAccountsReceivable().subscribe((res: any) => {
      this.receivable = res;
      this.pieChartDatasets[0].data[0] = Number(res.length);
      this.loading = false;
    })
  }

}
