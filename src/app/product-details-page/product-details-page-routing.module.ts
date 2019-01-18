import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsPageComponent } from './product-details-page.component';

const routes: Routes = [
  {path: '', component: ProductDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsPageRoutingModule { }
