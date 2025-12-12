import { Routes } from "@angular/router";
import { StoreFrontLayout } from "./layouts/store-front-layout/store-front-layout";
import { HomePageComponent } from "./pages/home-page/home-page";
import { GenderPageComponent } from "./pages/gender-page/gender-page";
import { ProductPageComponent } from "./pages/product-page/product-page";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page";

export const storeFrontRoutes: Routes = [
  {
   path: '',
   component:StoreFrontLayout,
   children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'gender/:gender',
      component: GenderPageComponent,
    },
     {
      path: 'product/:id',
      component: ProductPageComponent,
    },
    {
    path: '**',
    component: NotFoundPageComponent
    }

   ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

export default storeFrontRoutes;
