import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/service/product.service';
import {
    FormBuilder,
    Validators,
    FormControl,
    FormGroup,
} from '@angular/forms';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
    productForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(6)]],
        price: [0],
    });

    constructor(
        private productService: ProductService,
        private formBuilder: FormBuilder
    ) {}

    onHandleSubmit() {
        if (this.productForm.valid) {
            const product: IProduct = {
                name: this.productForm.value.name || '',
                price: this.productForm.value.price || 0,
            };
            this.productService.addProducts(product).subscribe((product) => {
              console.log('Success', product);
            });
        }
    }
}
