import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { AppModule } from 'src/app/app.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [BookingSearchComponent],
  imports: [CommonModule, MaterialModule]
})
export class BookingModuleModule {}
