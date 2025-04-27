import { Product } from "@/sanity.types";
import { get } from "http";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BasketItem {
    produc: Product;
    quantity: number;
} //3:10:26

interface BasketState {
    items: BasketItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    clearBasket: () => void;
    getTotalPrice: () => number;
    getItemCount: (productId: string) => number;
    getGroupedItems: () => BasketItem[];
}

    const useBasketStore = create<BasketState>()(
        persist(
            (set, get) => ({
                items: [],
                //3:10:50
            }),
            {
                name: "basket-store",
            }
        )
    );