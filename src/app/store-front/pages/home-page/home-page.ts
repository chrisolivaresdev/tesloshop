import { Component, inject } from '@angular/core';
import { ProductService } from '../../../products/services/Product.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Card } from '../../../products/components/card/card';
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
      return this.ProductService.getProducts({limit:5});
    },
  })

}
