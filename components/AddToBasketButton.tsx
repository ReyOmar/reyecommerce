'use client';

import { Product } from "@/sanity.types"
import useBasketStore from "@/store/store";
import { useState } from "react";

interface AddToBasketButtonProps {
    product: Product;
    disabled?: boolean;
}

function AddToBasketButton({ product, disabled}: AddToBasketButtonProps) {
    const {addItem, removeItem, getItemCount } = useBasketStore();
    const itemCount = getItemCount(product._id);

    const [isClient, setIsClient] = useState(false);
    return (
        <div>AddToBasketButton</div>
    )
}//3:17:42

export default AddToBasketButton;