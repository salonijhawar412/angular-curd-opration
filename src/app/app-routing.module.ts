import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostModule } from './post/post.module';

const routes: Routes = [
 { path: 'home', component: HomeComponent},
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 //customer module load
 { path: 'customers', loadChildren: () => import('./customers/customers.module')
 .then(m => m.CustomersModule) },
 //order module load
 { path: 'orders', loadChildren: () => import('./orders/orders.module').
 then(m => m.OrdersModule)},
 { path: 'newitem', loadChildren: () => import('./orders/orders.module').
 then(m => m.OrdersModule)},
 //post module load
  { path: 'post', loadChildren: () => import('./post/post.module')
  .then(m => PostModule) }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
