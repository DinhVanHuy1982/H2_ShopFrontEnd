import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {NgChartsModule, NgChartsConfiguration} from 'ng2-charts';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgGridAngular } from '@ag-grid-community/angular';
import {MatGridListModule} from '@angular/material/grid-list';
import { AgGridModule } from 'ag-grid-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OwlModule } from 'ngx-owl-carousel';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import { ToastrModule } from 'ngx-toastr';
import { LanguageSelectorComponent } from './views/partials/layout/topbar/language-selector/language-selector.component';
import { AsideLeftComponent } from './admin/Base/aside-left/aside-left.component';
import {MatIconModule} from "@angular/material/icon";
import { BaseComponent } from './admin/Base/base/base.component';
import { HeaderComponent } from './admin/Base/header/header.component';
import { BreadcrumbComponent } from './admin/Base/breadcrumb/breadcrumb.component';
import { DashboardComponent } from './admin/Views/Pages/dashboard/dashboard.component';
import { RoleManagementComponent } from './admin/Views/Pages/role-management/role-management.component';
import { ActionRoleManagementComponent } from './admin/Views/Pages/role-management/action-role-management/action-role-management.component';
import { HomePageComponent } from './viewsShare/Views/home-page/home-page.component';
import { MenuHorizontalComponent } from './viewsShare/Views/menu-horizontal/menu-horizontal.component';
import { ContentShopComponent } from './viewsShare/Views/content-shop/content-shop.component';
import { DetailProductComponent } from './client/detail-product/detail-product.component';
import { PanigationComponent } from './core/compontnts/panigation/panigation.component';
import { FileDetailComponent } from './core/compontnts/file-detail/file-detail.component';
import { CartComponent } from './client/cart/cart.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterAccountComponent } from './viewsShare/Views/register-account/register-account.component';
import { LoginComponent } from './viewsShare/Views/login/login.component';
import { DatePipe } from '@angular/common';
import { CreateUpdateRoleComponent } from './admin/Views/Pages/role-management/create-update-role/create-update-role.component';
import { ProductManagementComponent } from './admin/Views/Pages/product-management/product-management.component';
import {TreeviewModule,
  DropdownTreeviewComponent,
  TreeviewConfig,
  DefaultTreeviewI18n,
  TreeviewI18n,
  DefaultTreeviewEventParser,
  TreeviewEventParser} from "ngx-treeview";
import { ActionProductComponent } from './admin/Views/Pages/product-management/action-product/action-product.component';
import { CreateUpdateProductComponent } from './admin/Views/Pages/product-management/create-update-product/create-update-product.component';
import {MatSelectModule} from "@angular/material/select";
import { BrandManagementComponent } from './admin/Views/Pages/brand-management/brand-management.component';
import { ActionBrandManagementComponent } from './admin/Views/Pages/brand-management/action-brand-management/action-brand-management.component';
import { OrderManagementComponent } from './admin/Views/Pages/order-management/order-management.component';
import { ActionOrderManagementComponent } from './admin/Views/Pages/order-management/action-order-management/action-order-management.component';
import { OrderDetailComponent } from './admin/Views/Pages/order-management/order-detail/order-detail.component';
import { CategoriesManagementComponent } from './admin/Views/Pages/categories-management/categories-management.component';
import { ActionCategoriesComponent } from './admin/Views/Pages/categories-management/action-categories/action-categories.component';
import { CreateUpdateCategoriesComponent } from './admin/Views/Pages/categories-management/create-update-categories/create-update-categories.component';
import { BannerManagementComponent } from './admin/Views/Pages/banner-management/banner-management.component';
import { CreateUpdateBrandComponent } from './admin/Views/Pages/brand-management/create-update-brand/create-update-brand.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from "@angular/material/table";
import { SaleManagementComponent } from './admin/Views/Pages/sale-management/sale-management.component';
import { ActionSaleComponent } from './admin/Views/Pages/sale-management/action-sale/action-sale.component';
import { CreateUpdateSaleComponent } from './admin/Views/Pages/sale-management/create-update-sale/create-update-sale.component';
import { DateComponent } from './viewsShare/Views/date/date.component';
import {NgbDatepicker, NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SearchPageComponent } from './viewsShare/Views/search-page/search-page.component';
import { CreateOrderComponent } from './client/cart/create-order/create-order.component';
import { UserManagementComponent } from './admin/Views/Pages/user-management/user-management.component';
import { ActionUserManagementComponent } from './admin/Views/Pages/user-management/action-user-management/action-user-management.component';
import { CreateUpdateUserComponent } from './admin/Views/Pages/user-management/create-update-user/create-update-user.component';
import { ImportProductManagementComponent } from './admin/Views/Pages/import-product-management/import-product-management.component';
import { CreateImportProductComponent } from './admin/Views/Pages/import-product-management/create-import-product/create-import-product.component';
import { ActionImportProductComponent } from './admin/Views/Pages/import-product-management/action-import-product/action-import-product.component';
import { ViewOrderComponent } from './client/cart/view-order/view-order.component';
import { ActionViewOrderComponent } from './client/cart/action-view-order/action-view-order.component';
import { FooterShopComponent } from './viewsShare/Views/footer-shop/footer-shop.component';
import { MyAccountComponent } from './viewsShare/Views/my-account/my-account.component';
import { ChangePasswordComponent } from './viewsShare/Views/change-password/change-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectorComponent,
    AsideLeftComponent,
    BaseComponent,
    HeaderComponent,
    BreadcrumbComponent,
    DashboardComponent,
    RoleManagementComponent,
    ActionRoleManagementComponent,
    HomePageComponent,
    MenuHorizontalComponent,
    ContentShopComponent,
    DetailProductComponent,
    PanigationComponent,
    FileDetailComponent,
    CartComponent,
    RegisterAccountComponent,
    LoginComponent,
    CreateUpdateRoleComponent,
    ProductManagementComponent,
    ActionProductComponent,
    CreateUpdateProductComponent,
    BrandManagementComponent,
    ActionBrandManagementComponent,
    OrderManagementComponent,
    ActionOrderManagementComponent,
    OrderDetailComponent,
    CategoriesManagementComponent,
    ActionCategoriesComponent,
    CreateUpdateCategoriesComponent,
    BannerManagementComponent,
    CreateUpdateBrandComponent,
    SaleManagementComponent,
    ActionSaleComponent,
    CreateUpdateSaleComponent,
    DateComponent,
    SearchPageComponent,
    CreateOrderComponent,
    UserManagementComponent,
    ActionUserManagementComponent,
    CreateUpdateUserComponent,
    ImportProductManagementComponent,
    CreateImportProductComponent,
    ActionImportProductComponent,
    ViewOrderComponent,
    ActionViewOrderComponent,
    FooterShopComponent,
    MyAccountComponent,
    ChangePasswordComponent
  ],
  imports: [
    MatDatepickerModule,
    ScrollingModule,
    DragDropModule,
    CdkTreeModule,
    CdkTableModule,
    TreeviewModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgChartsModule,
    ReactiveFormsModule,
    ChartModule,
    DropDownsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    NgSelectModule,
    AgGridModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right'
    }),
    TranslateModule.forRoot(),
    OwlModule,
    MatTreeModule,
    MatIconModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    NgbDatepicker,
    NgbInputDatepicker
  ],
  providers: [DatePipe,TreeviewConfig,
    { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
    { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser },SearchPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
