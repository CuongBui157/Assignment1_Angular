import { Component } from '@angular/core';
import { IProduct } from './interfaces/Product';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    products: IProduct[] = [
        {
            id: 1,
            name: 'Sản phẩm Ahihi',
            price: 1000,
            image: 'https://picsum.photos/200/200',
        },
        {
            id: 2,
            name: 'Sản phẩm B',
            price: 2000,
            image: 'https://picsum.photos/200/200',
        },
        {
            id: 3,
            name: 'Sản phẩm C',
            price: 3000,
            image: 'https://picsum.photos/200/200',
        },
    ];
    onHandleRemove(id: any) {
        this.products = this.products.filter((item) => item.id !== id);
    }
}
