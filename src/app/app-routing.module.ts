import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { AccountsPayableComponent } from './pages/accounts-payable/accounts-payable.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { PeopleComponent } from './pages/people/people.component';
import { AccountsReceivableComponent } from './pages/accounts-receivable/accounts-receivable.component';


const routes: Routes = [
  {
    path: 'business',
    component: ToolbarComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'accounts-payable', component: AccountsPayableComponent},
      {path: 'accounts-receivable', component: AccountsReceivableComponent},
      {path: 'people', component: PeopleComponent},
      {path: 'report', component: ReportsComponent},
    ]
  },
  {path: '**', redirectTo: 'business'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule {
}
