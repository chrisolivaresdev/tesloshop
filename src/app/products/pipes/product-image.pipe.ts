import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage'
})

export class productImagePipe implements PipeTransform {


  transform(value: string | string[] , ...args: any[]): any {

    if (typeof value === 'string') {
          return `${baseUrl}/files/product/${value}`;
    }

    const image = value[0]

    if(!image){
      return './assets/images/no-image.jpg';
    }

      return `${baseUrl}/files/product/${image}`;
  }
}
