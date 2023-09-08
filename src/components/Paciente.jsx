// import { PropTypes } from "prop-types";

const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  return (
    <div className="mx-5 mb-3 px-5 py-10 rounded-lg bg-white shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""} <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
    </div>
  );
};

// Paciente.propTypes = {
//   paciente: PropTypes.object,
// };

export default Paciente;
