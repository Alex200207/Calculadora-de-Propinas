import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  //creamos un estado para la orden ya que este sera de
  //tipo never se le debe dar un tipo de dato
  //pasamos dentro del generic el tipo de dato que va a tener
  //en este caso el que tenemos en el type OrderItem lo pasamos como arreglo
  //este es una copia del otro pero tiene otro tipo de dato
  //adicional llamado quantity
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    //identificando si un item ya existe en la orden usando find y el id
    const itemExist = order.find((orderItem) => orderItem.id === item.id);


    //siempre puedes usar vs para saber que
    //colocarte en la funcion y ahi vas a ver esa firma
    //puedes copiarla y utlizarla en tus types vs nuna se va equivocar
    if (itemExist) {
      //identicar el elemento repetido
      const updatedOrder = order.map(orderItem => orderItem.id === item.id? 
       {...orderItem, quantity: orderItem.quantity + 1} : orderItem )

       //que hace este codigo ?? toma una copia de lo que ya haya en nuestra orden
       //pero en la parte de cantidad toma lo que ya tenemos y le suma 1
       //esto lo hacemos para identificar que elemento es duplicado para 
       //incrementar su cantidad y gracias al map nos retorna un arreglo nuevo
       setOrder(updatedOrder); //setiamos la orden con el nuevo arreglo
    } 
    
    else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  return {
    addItem,
  };
}
