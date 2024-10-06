

//agregamos un arreglo de objetos que tiene las propinas asi evitar hacerlo por serpardo
//y iteramos sobre ellas
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
     setTip: React.Dispatch<React.SetStateAction<number>>
      tip: number
}

export default function TipPercentageForm({setTip,tip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-xl">Propina:</h3>
      <form action="">
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id} className="flex gap-2">
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input 
            id={tipOptions.id} 
            type="radio" 
            name="tip" //poner un name para todo
            value={tipOptions.value} //y un valor unico asi evitamos selecionarlos todos
            onChange={e => setTip(+e.target.value)}//usamos target.value pxq es l fonrma en la que se puede acceder al value
            //con + convertimos el estring a numbeer
            checked={tipOptions.value === tip}//habilita en caso de ser iguales asi evitamos tener seleccionada una opcion
            //del radio cuando se limpie el componente
            />
          </div>
        ))}
      </form>
    </div>
  );
}
