import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {CartComponent} from "./pages/cart/cart.component";
import {LoginComponent} from "./pages/login/login.component";
import {PaymentComponent} from "./pages/payment/payment.component";
import {ProductDetailsComponent} from "./pages/product-details/product-details.component";
import {ProductsComponent} from "./pages/products/products.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component:HomepageComponent},
  {path: 'contact-us', component:AboutUsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'products', component: ProductsComponent , data:{navigateToList: false}},
  {path: 'sign-up', component: SignUpComponent},


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})


export class AppRoutingModule { }
