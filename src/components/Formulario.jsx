import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    setPacientes([...pacientes, objPaciente]);

    //clear form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimientos Pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          {error && <Error mensaje="Todos los campos son obligatorios" />}
          <div className="mb-5">
            <label
              className="block font-bold text-gray-700 uppercase"
              htmlFor="mascota"
            >
              Nombre Mascota
            </label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block font-bold text-gray-700 uppercase"
              htmlFor="propietario"
            >
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre de la Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block font-bold text-gray-700 uppercase"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block font-bold text-gray-700 uppercase"
              htmlFor="date"
            >
              Fecha de Alta
            </label>
            <input
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              className="block font-bold text-gray-700 uppercase"
              htmlFor="sintomas"
            >
              Fecha de Alta
            </label>
            <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Descripcion"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        </form>
      </div>
    </>
  );
};

export default Formulario;
