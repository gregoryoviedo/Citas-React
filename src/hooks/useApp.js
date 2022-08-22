import { useEffect, useState } from "react";

export const useApp = () => {
  //Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas
  const [citas, gusrdarCitas] = useState(citasIniciales);

  //UseEffect para realizar ciertas operacion cuando el State cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    gusrdarCitas([...citas, cita]);
  };

  //Funcion que eliminar una cita por su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    gusrdarCitas(nuevasCitas);
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return {
    titulo,
    citas,
    crearCita,
    eliminarCita,
  };
};
