//import React, { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useFrom';

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  //
  const {formulario, handleChange} = useForm<FormData>({
    email: 'juangom@gmail',
    nombre: 'Juan Gomez',
    edad: 30,
  })

  const {email, nombre, edad } = formulario;

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
        <input type="email" className='form-control' name="email" value={email} onChange={handleChange}/>
      </div>

      <div className="mb-3">
        <label className="from-label">Nombre</label>
        <input type="text" className='form-control' name="nombre" value={nombre} onChange={handleChange}/>
      </div>

      <div className="mb-3">
        <label className="from-label">Edad</label>
        <input type="number" className='form-control' name="edad" value={edad} onChange={handleChange}/>
      </div>

      <pre>{ JSON.stringify(formulario)}</pre>
    </form>
  );
};
