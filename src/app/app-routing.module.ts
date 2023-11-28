import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './components/Shopping-list/shopping-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent
  },
  {
    path: 'addtodo',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
