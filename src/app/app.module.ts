import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { HomePageComponent } from './page/home-page/home-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        AppComponent,
        BaseLayoutComponent,
        ProductListComponent,
        AdminLayoutComponent,
        AdminProductComponent,
        DashboardComponent,
        ProductAddComponent,
        ProductEditComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
