import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Product } from '../../interfaces/product.interface';
import { SlicePipe } from '@angular/common';
import { productImagePipe } from '../../pipes/product-image.pipe';

@Component({
  selector: 'app-card',
  imports: [RouterLink, SlicePipe, productImagePipe],
  templateUrl: './card.html',
})

export class Card {

  product = input.required<Product>();

 }
