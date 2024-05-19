import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product } from '@shared/models/product.interface'

export type CartStore = {
  products: Product[],
  totalAmount: number,
  productsCount: number
}

const initialState: CartStore = {
  products: [],
  totalAmount: 0,
  productsCount: 0,
};

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products }) => ({
    productsCount: computed(() => calculateProductCount(products())),
    totalAmount: computed(() => calculateTotalAmount(products())),
  })),
  withMethods(({products, ...store}) => ({
    addToCart(product: Product) {
      const isProductInCart = products().find(prod => prod.id === product.id)

      if (isProductInCart) {
        isProductInCart.qty++;
        isProductInCart.subTotal = isProductInCart.qty * isProductInCart.price;
        patchState(store, { products: [...products()] });
      } else {
        patchState(store, { products: [...products(), product] });
      }
    },
    removeFromCart(id: number) {
      const updateProducts = products().filter(prod => prod.id !== id)
      patchState(store, { products: updateProducts })
    },
    clearCart() {
      patchState(store, initialState)
    }
  }))
)

function calculateTotalAmount(products: Product[]): number {
  return products.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
}

function calculateProductCount(products: Product[]): number {
  return products.reduce((acc, product) => {
    return acc + product.qty
  }, 0);
}
