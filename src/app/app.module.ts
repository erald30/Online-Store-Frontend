import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { PaymentComponent } from './pages/payment/payment.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductComponent } from './shared/product/product.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { HomesliderComponent } from './pages/homepage/homeslider/homeslider.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {FormsModule} from "@angular/forms";
import { NewproductsComponent } from './pages/homepage/newproducts/newproducts.component';
import { MostsoldproductsComponent } from './pages/homepage/mostsoldproducts/mostsoldproducts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    LoginComponent,
    SignUpComponent,
    ProductDetailsComponent,
    ProductsComponent,
    WishlistComponent,
    AboutUsComponent,
    PaymentComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    HomesliderComponent,
    NewproductsComponent,
    MostsoldproductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    CarouselModule,
    FormsModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
