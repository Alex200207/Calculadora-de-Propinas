import { OrderItem } from "../types";

type OrdenContentsProp = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrdenContentsProp) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3">
        {order.length === 0 ? (//decimos que si la orden esta vacia
          <p>No hay elementos en la orden</p>//nos muestre este mensaje
        ) : (//si no esta vacia
          order.map((item) =>//iteramos sobre cada item
          
             <div key={item.id}>
                <p>{item.name}</p>{/*mostramos el nombre de la orden */}
             </div>)
        )}
      </div>
    </div>
  );
}
