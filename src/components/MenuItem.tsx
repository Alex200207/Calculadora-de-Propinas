import type { MenuItem } from "../types"

type MenuItemProps ={
  item: MenuItem
  addItem: () => void//decimos que es una funcion que no retorna nada
  //sabemos su tipo al ver la funcion vs nos dira de que tipo es
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between "
    onClick={()=> addItem()}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
