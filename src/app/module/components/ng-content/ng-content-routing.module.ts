import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { NgContentBComponent } from './ng-content-b/ng-content-b.component';

const routes: Routes = [
  {
    path: 'cA',
    component: ComponentAComponent
  },
  {
    path: 'cB',
    component: NgContentBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContentRoutingModule { }
