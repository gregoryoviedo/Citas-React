import React from "react";

//componentes
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

//hooks
import { useApp } from "./hooks/useApp";

function App() {
  const { citas, titulo, crearCita, eliminarCita } = useApp();

  return (
    <>
      <h1>🐶 Veterinaria SC 🐱</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
