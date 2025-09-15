// src/store/cartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === item.id);
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, qty: i.qty + 1 } : i
              ),
            };
          }
          return { cart: [...state.cart, { ...item, qty: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQty: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          ),
        })),

      decreaseQty: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.qty > 1
              ? { ...item, qty: item.qty - 1 }
              : item
          ),
        })),

      clearCart: () => set({ cart: [] }),

      cartTotal: () =>
        get().cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    }),
    {
      name: "cart-storage", // unique key in localStorage
    }
  )
);

export default useCartStore;
