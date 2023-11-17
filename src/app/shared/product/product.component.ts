import {Component, Input} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() bgColor! : string;

 @Input() productData! : Product;
}
