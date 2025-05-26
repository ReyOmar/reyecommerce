import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getMyOrders(userId: string) {
    if (!userId) {
        throw new Error('User ID is required');
    }

    //define the query to get orders based on userId, sorted by order date descending
    const MY_ORDERS_QUERY = defineQuery(`
    *[_type == "order" && $userId] | order(orderDate desc) {
        ...,
        products[]{
            ...,
            product->
        }
    }
    `);

try {
    //use sanityfetch to send the query
    const orders = await sanityFetch({
        query: MY_ORDERS_QUERY,
        params: { userId },
    });

    //return the list of orders, or an empty array if no orders found
    return orders.data || [];
} catch (error) {
    console.error('Error fetching orders:', error);
    throw new Error('error fetching orders');
    }
}
