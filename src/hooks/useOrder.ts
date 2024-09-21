
import { useState } from "react"
import { OrderItem } from "../types"

export default function useOrder() {
    //creamos un estado para la orden ya que este sera de 
    //tipo never se le debe dar un tipo de dato 
    //pasamos dentro del generic el tipo de dato que va a tener
    //en este caso el que tenemos en el type OrderItem lo pasamos como arreglo
    //este es una copia del otro pero tiene otro tipo de dato
    //adicional llamado quantity
    const[order, setOrder] = useState<OrderItem[]>([])
    
    const [total, setTotal] = useState(0)
    const [auth, setAuth] = useState(false)


    return {

    }
}