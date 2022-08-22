import React from "react";
import PropTypes from "prop-types";
import { UilTrash } from "@iconscout/react-unicons";

const Cita = ({ cita, eliminarCita }) => {
  const { id, mascota, propietario, tipo, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Tipo: <span>{tipo}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(id)}
      >
        Eliminar
        <UilTrash />
      </button>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
