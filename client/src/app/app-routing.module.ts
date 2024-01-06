import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { SearchCountryComponent } from './components/search-country/search-country.component';

const routes: Routes = [
  { path: '', component: SearchCountryComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
