export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',currency: 'USD'
    }).format(quantity) // de esta forma le decimos que queremos formatiar esta cantidad

} 
// Esto lo que hace es colocar el signo de dolar en la cantidad que le pasemos
//el signo de dolar estara en el lado izquierdo de la cantidad
//esta funcion se puede usar en  diferente lugares

//Intl.NumberFormat quiere decir que vamos a formatear un numero
//en-US es el locale que vamos a utilizar
//style: 'currency' es el estilo que vamos a utilizar
//currency: 'USD' es la moneda que vamos a utilizar
//format(quantity) es la cantidad que vamos a formatear






