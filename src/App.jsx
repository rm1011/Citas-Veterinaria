import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <div className="container mx-auto mt-20 ">
        <Header />
        <div className="md:flex mt-12">
          <Formulario pacientes={pacientes} setPacientes={setPacientes} />
          <ListaPacientes />
        </div>
      </div>
    </>
  );
}

export default App;
