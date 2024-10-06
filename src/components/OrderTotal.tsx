import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
};

export default function OrderTotal({ order }: OrderTotalsProps) {
    //useMemo es un hook que nos permite memorizar un valor 
    //y solo se va a volver a calcular si las dependencias cambian
    //en este caso la dependencia es la orden
    //en este caso vamos a calcular el subtotal de la orden
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),//reduce es una funcion que nos permite reducir un arreglo a un solo valor
    //calculamos el total de la orden multiplicando la cantidad por el precio de cada item y sumandolo al total que ya teniamos 
    //reduce recibe dos parametros el primero es una funcion que recibe dos parametros el total y el item y el segundo es el valor inicial que es 0
    [order]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold">$0</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold">$0</span>
        </p>
      </div>
      <button></button>
    </>
  );
}
