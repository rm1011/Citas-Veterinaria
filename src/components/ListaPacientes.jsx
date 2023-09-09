// import { PropTypes } from "prop-types";
import Paciente from "./Paciente";

const ListaPacientes = ({ pacientes }) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="text-center font-black text-3xl">Lista de Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Administra a tus {""}{" "}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <div className="md:h-screen overflow-y-scroll">
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} />
          ))}
        </div>
      </div>
    </>
  );
};

// ListaPacientes.propTypes = {
//   pacientes: PropTypes.object,
// };

export default ListaPacientes;
