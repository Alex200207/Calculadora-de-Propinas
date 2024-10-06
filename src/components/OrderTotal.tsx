import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number
  placeOrder: () => void
  
};

export default function OrderTotal({ order ,tip,placeOrder}: OrderTotalsProps) {
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

  const tipAmount = useMemo(() => subtotalAmount * tip , [ tip , order ])//usaremos useMemo recalcula el varlor una ves 
  //cambie lo del arreglo de dependencia es decir si cambia la propina
  //cuando cambie el contenido de nuetra orden

  const totalAmount = useMemo(()=> subtotalAmount + tipAmount, [tip,order])//calcular el total a pagar sumando la propina y el subtotal usando siempre useMemo


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
          <span className="font-bold">{formatCurrency(tipAmount)}</span>{/*lo pasamos y usamos la funcion format para egregar el signo de dolar */}
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
      className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
      disabled={totalAmount === 0 }//deshabilitamos el boton si el total es 0
      onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
