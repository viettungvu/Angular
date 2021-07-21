import { ProductService } from './product-list/product.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import{InputTextModule} from 'primeng/inputtext';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';

import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ProductDetailComponent,
    PostComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
