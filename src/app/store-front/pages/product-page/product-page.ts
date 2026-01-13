import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductService } from '../../../products/services/Product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
})
export class ProductPageComponent {

  ProductService = inject(ProductService);
  activateRoute = inject(ActivatedRoute);
  productIdSlug = this.activateRoute.snapshot.params['id'];

constructor(){
  console.log(this.productIdSlug)
}

  productsResorce = rxResource({
    request: () => ({idSlug : this.productIdSlug}),
    loader: ({request}) => {
      return this.ProductService.getProductByIDSlug(request.idSlug);
    },
  })

 }
