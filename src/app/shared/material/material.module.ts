import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule
  ],
  exports: [
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTreeModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
