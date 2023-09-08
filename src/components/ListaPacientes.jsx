import Paciente from "./Paciente";

const ListaPacientes = () => {
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="text-center font-black text-3xl">Lista de Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Administra a tus {""}{" "}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <div className="md:h-screen overflow-y-scroll">
          <Paciente />
          <Paciente />
        </div>
      </div>
    </>
  );
};

export default ListaPacientes;
