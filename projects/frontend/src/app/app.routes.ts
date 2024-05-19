import { Routes } from '@angular/router'
// ----------
import { PublicLayoutComponent } from '@layout/public-layout/public-layout.component'

export const routes: Routes = [
  {
    title: 'Products | WebMarket',
    path: 'products',
    component: PublicLayoutComponent,
    data: {
      header: {
        title: 'Product list'
      }
    },
    children: [{
      path: '',
      loadComponent: async () => await import('./pages/products/products.component')
    }]
  },
  {
    title: 'Details | WebMarket',
    path: 'products-details/:id',
    component: PublicLayoutComponent,
    data: {
      header: {
        title: 'Product details'
      },
      navigation: {
        useBackButton: true
      }
    },
    children: [{
      path: '',
      loadComponent: async () => await import('./pages/details/details.component')
    }]
  },
  {
    title: 'Checkout | WebMarket',
    path: 'checkout',
    component: PublicLayoutComponent,
    data: {
      header: {
        title: 'Checkout'
      },
      navigation: {
        useBackButton: true
      }
    },
    children: [{
      path: '',
      loadComponent: async () => await import('./pages/checkout/checkout.component')
    }]
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
]
