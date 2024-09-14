import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatFormField
} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatFormFieldModule, MatDatepickerModule],
  exports: [CommonModule, MatFormFieldModule, MatDatepickerModule]
})
export class MaterialModule {}
