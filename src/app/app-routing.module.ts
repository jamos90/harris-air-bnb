import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSearchComponent } from './modules/booking/booking-search/booking-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BookingSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
