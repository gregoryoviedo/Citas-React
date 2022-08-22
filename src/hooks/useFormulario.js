import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useFormulario = ({ crearCita }) => {
  //Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    tipo: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //Crear State de error
  const [error, ActualizarError] = useState(false);

  //Funcion que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los datos del state de citas
  const { mascota, propietario, tipo, fecha, hora, sintomas } = cita;
  //Cuando el usuario presione agregar cit
  const submitcita = (e) => {
    e.preventDefault();

    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      tipo.trim() === "" ||
      tipo === "selecciona" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      ActualizarError(true);
      return;
    }

    //Eliminar el mensaje previo
    ActualizarError(false);

    //Asignar un ID
    cita.id = uuidv4();

    //Crear la cita
    crearCita(cita);

    //Reiniciar el form
    actualizarCita({
      mascota: "",
      propietario: "",
      tipo: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return {
    cita,
    error,
    actualizarState,
    submitcita,
  };
};
