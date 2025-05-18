'use server'

import { BasketItem } from "@/store/store";

export type Metadata = {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    clerkUserId: string;
};

export type GropedBasketItem = {
    product:BasketItem['product'];
    quantity: number;
};

export async function createCheckoutSession(
    items: GroupedBasketItem[],
    metadata: Metadata
){
  try {
    // check if any grouped items do not have a price
    const itemsWhithoutPrice = items.filter((item) => !item.product.price);
    if (itemsWhithoutPrice.length > 0) {
      throw new Error('Some items do not have a price');
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }  
}

//3:34:03