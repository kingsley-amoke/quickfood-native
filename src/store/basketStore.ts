import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  img: any;
}

export interface BasketStore {
  products: Array<Product & { quantity: number }>;
  items: number;
  total: number;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
}

export const useBasketStore = create<BasketStore>((set) => ({
  products: [],
  items: 0,
  total: 0,
  addProduct: (product) => {
    set((state) => {
      state.items += 1;
      state.total += product.price;

      const hasProduct = state.products.find((p) => p.id === product.id);
      if (hasProduct) {
        hasProduct.quantity += 1;
        return { products: [...state.products] };
      } else {
        return { products: [...state.products, { ...product, quantity: 1 }] };
      }
    });
  },
  reduceProduct: (product) => {
    set((state) => {
      state.items -= 1;
      state.total -= product.price;
      return {
        products: state.products
          .map((p) => {
            if (p.id === product.id) {
              p.quantity -= 1;
            }
            return p;
          })
          .filter((p) => p.quantity > 0),
      };
    });
  },
  clearCart: () => set({ products: [], items: 0, total: 0 }),
}));
