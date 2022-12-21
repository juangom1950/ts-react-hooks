//import React, { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useFrom';

interface FormData {
  postal: string,
  ciudad: string,
}

export const Formulario2 = () => {
  //
  const {formulario, handleChange} = useForm<FormData>({
    postal: "ABC",
    ciudad: "Ottawa",
  })

  const { postal, ciudad} = formulario;

  // const [formulario, setFormuario] = useState({
  //   email: '',
  //   nombre: ''
  // });

  // // from the event I am destructuring the "target"
  // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = target;
  //   setFormuario({...formulario, [name]: value })
  //   //console.log(e);
  // }

  return (
    <form>
      <div className="mb-3">
        <label className="from-label">Email</label>
        {/* to get the type of the event I can hover the mouse on "e". It will show me this type ChangeEvent<HTMLInputElement> */}
        {/* This onChange={(e) => handleChange(e)} is the same than onChange={handleChange} */}
        <input type="email" className='form-control' name="postal" value={postal} onChange={handleChange}/>
      </div>

      <div className="mb-3">
        <label className="from-label">Nombre</label>
        <input type="text" className='form-control' name="ciudad" value={ciudad} onChange={handleChange}/>
      </div>

      <pre>{ JSON.stringify(formulario)}</pre>
    </form>
  );
};
