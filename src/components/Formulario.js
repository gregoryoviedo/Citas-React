import React from "react";
import PropTypes from "prop-types";
import {
  UilExclamationTriangle,
  UilFolderPlus,
} from "@iconscout/react-unicons";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ crearCita }) => {
  const { cita, actualizarState, submitcita, error } = useFormulario({
    crearCita,
  });

  return (
    <>
      <h2>Crear cita</h2>

      {error && (
        <p className="alerta-error">
          <UilExclamationTriangle className="icon-warning" />
          Todos los campos son obligatorios
          <UilExclamationTriangle className="icon-warning" />
        </p>
      )}

      <form onSubmit={submitcita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={cita.mascota}
        />

        <label>Tipo</label>
        <select className="u-full-width" name="tipo" value={cita.tipo} onChange={actualizarState}>
          <option value="selecciona">Selecciona</option>
          <option value="Perro 🐶">Perro</option>
          <option value="Gato 🐱">Gato</option>
          <option value="Hamster 🐹">Hamster</option>
          <option value="Conejo 🐰">Conejo</option>
          <option value="Pajaro 🐦">Pajaro</option>
        </select>

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={cita.propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={cita.sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button agregar">
          Agregar Cita
          <UilFolderPlus />
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
