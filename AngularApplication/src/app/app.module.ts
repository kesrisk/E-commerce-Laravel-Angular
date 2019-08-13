import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { HeaderComponent } from './layout/header.component';
import { HomeComponent } from './home/home.component';
import { CategoriesModule } from './categories/categories.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { AuthenticationService } from './services/Authentication.service';
import { appRoute } from 'src/routes';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    CategoriesModule,
    ProductModule,
    OrderModule,
    CategoriesModule
  ],
  providers: [
    ApiService,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }