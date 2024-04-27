import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./admin/Views/Pages/dashboard/dashboard.component";
import {RoleManagementComponent} from "./admin/Views/Pages/role-management/role-management.component";
import {HomePageComponent} from "./viewsShare/Views/home-page/home-page.component";
import {DetailProductComponent} from "./client/detail-product/detail-product.component";
import {AppComponent} from "./app.component";
import {ContentShopComponent} from "./viewsShare/Views/content-shop/content-shop.component";
import {CartComponent} from "./client/cart/cart.component";
import {UserService} from "./viewsShare/Views/user.service";
import {ProductManagementComponent} from "./admin/Views/Pages/product-management/product-management.component";

// const userLogin =

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "product-management", component: ProductManagementComponent},
  {path:"role-management",component:RoleManagementComponent},
  {path: "home-page",component: HomePageComponent},
  {path: "details", component:DetailProductComponent},
  {path:"h2shop/cart",component:CartComponent},
  {path: "**", component: ContentShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private userService:UserService) {
  }
}
