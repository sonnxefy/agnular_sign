import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SomeModuleModule } from 'src/app/shared/some-module/some-module.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsRoutingModule,
    SomeModuleModule
  ]
})
export class ComponentsModule { }
