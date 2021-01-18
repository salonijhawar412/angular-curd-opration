import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewitemComponent } from './newitem/newitem.component';

import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'new', component: NewitemComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
