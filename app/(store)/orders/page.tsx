import { getMyOrders } from "@/sanity/lib/orders/getMyOrders";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Orders() {

    const { userId } = await auth();
    if (!userId) {
        return redirect('/');
    }

    const orders = await getMyOrders(userId);

  return (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg w-full max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-8">
                    Mis Ordenes
                </h1>

                {orders.length === 0 ? (
                    <div className="text-center text-gray-600">
                        <p>Todavia no has realizado ninguna orden.</p>
                    </div>    
                ) : (
                    <div className="p-4 sm:p-6 border-b border">
                        <h1>Orden</h1>
                    </div>
                    )} 
                    {/* 4:22:46 */}
            </div>    
        </div>
    );
}

export default Orders;