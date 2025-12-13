import { Component, inject } from '@angular/core';
import { Card } from "../../components/card/card";
import { ProductService } from '../../../products/services/Product.service';
import { rxResource } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-home-page',
  imports: [Card],
  templateUrl: './home-page.html',
})
export class HomePageComponent {

  ProductService = inject(ProductService);

  productsResorce = rxResource({
    request: () => ({}),
    loader: ({request}) => {
      return this.ProductService.getProducts({limit:1});
    },
  })

}
