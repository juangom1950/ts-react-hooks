import { ChangeEvent, useState } from 'react'

// With arrow function we need to add the "extends object"
//export function useForm<T>(initState: T) {
export const useForm = <T extends object>(initState: T) => {
  //
  const [formulario, setFormuario] = useState(initState);

  // from the "event" I am destructuring the "target"
  // This is just changing the state of the form
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setFormuario({...formulario, [name]: value })
    //console.log(e);
  }

  // This is all what I want expose in my Custom Hook
  return {
    formulario,
    handleChange,
  }
  
}
