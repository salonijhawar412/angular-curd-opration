import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  // { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: '', component: IndexComponent },
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'view/:id',component:ViewComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
