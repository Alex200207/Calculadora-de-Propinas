export type MenuItem ={
    id: number,
    name: string,
    price: number
}


export type OrderItem = MenuItem & {//& es para unir dos tipos de datos
    quantity: number
}