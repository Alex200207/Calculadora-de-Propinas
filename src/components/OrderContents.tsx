import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrdenContentsProp = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrdenContentsProp) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ? ( //decimos que si la orden esta vacia
          <p>No hay elementos en la orden</p> //nos muestre este mensaje
        ) : (
          //si no esta vacia
          order.map(
            (
              item //iteramos sobre cada item
            ) => (
              <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                <div>
                  <p className="text-lg">
                    {item.name} - {formatCurrency(item.price)}
                  </p>
                  {/*mostramos el nombre de la orden */}
                  <p className="font-black">
                    Cantidad: {item.quantity} - Total:{" "}
                    {item.quantity * item.price}
                  </p>
                </div>

                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                  X
                </button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
