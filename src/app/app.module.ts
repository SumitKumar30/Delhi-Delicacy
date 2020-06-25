import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingEditComponent } from './shopping-cart/shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { CategoryServiceService } from './services/category-service.service';
import { FormsModule } from '@angular/forms';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { ContactComponent } from './contact/contact.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
// import { FontAwesomeModule } from 'font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    RecipesComponent,
    ShoppingCartComponent,
    ShoppingEditComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    GoogleMapsModule,
    // FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'recipes', component: RecipesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'admin/products', component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/orders', component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
      { path: 'admin/forms', component: ProductFormComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'check-out', component: CheckoutComponent, canActivate: [AuthGuardService] }
      // {path: 'footer', component: FooterComponent}
    ])
  ],
  providers: [
    CategoryServiceService,
    NgxNavigationWithDataComponent,
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
