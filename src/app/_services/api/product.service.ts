import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/api/product';
import { ProductDetail } from 'src/app/_models/api/productDetail';
import { HttpClientService } from '../http-client.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    path: string = "product";

    constructor(private http: HttpClientService) { }

    getProductByCategoryId(id: number) {
        return this.http.get<Product[]>(`${this.path}/category/${id}`);
    }

    getDetailById(id: number) {
        return this.http.get<ProductDetail>(`${this.path}/${id}`)
    }

    getAll() {
        return this.http.get<Product[]>(`${this.path}`)
    }
}