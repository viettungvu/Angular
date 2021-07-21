import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostComponent } from './post/post.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'category', component:CategoryListComponent},
  {path:'product', component:ProductListComponent},
  {path:'product/:id/details', component:ProductDetailComponent},
  {path:'post', component:PostComponent},
  {path:'post/create', component:PostCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ProductListComponent, CategoryListComponent, ProductDetailComponent]
