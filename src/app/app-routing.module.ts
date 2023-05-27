import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [{ path: '', component: HomePageComponent }],
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'product', component: ProductListComponent },
            { path: 'product/add', component: ProductAddComponent },
            { path: 'product/:id/edit', component: ProductEditComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
