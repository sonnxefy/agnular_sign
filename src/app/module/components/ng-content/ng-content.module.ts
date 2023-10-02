import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContentRoutingModule } from './ng-content-routing.module';
import { ComponentAComponent } from './component-a/component-a.component';
import { NgContentComponent } from './ng-content.component';
import { NgContentBComponent } from './ng-content-b/ng-content-b.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SomeModuleModule } from 'src/app/shared/some-module/some-module.module';

@NgModule({
  declarations: [
    NgContentComponent,
    ComponentAComponent,
    NgContentBComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgContentRoutingModule,
    MaterialModule,
    SomeModuleModule
  ]
})
export class NgContentModule { }
