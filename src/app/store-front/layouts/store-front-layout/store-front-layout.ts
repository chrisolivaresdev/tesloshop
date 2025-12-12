import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-store-front-layout',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './store-front-layout.html',
})
export class StoreFrontLayout { }
