import { CommentsDetail } from "./comments";

export class ProductDetail {
    id: number = 0;
    productName: string = '';
    userId: number = 0;
    username: string = '';
    quantity: number = 0;
    salesPrice: string = '';
    categoryName: string = '';
    productImages: any[] = [];
    comments: CommentsDetail[] = [];
    detail: string = ''
}
