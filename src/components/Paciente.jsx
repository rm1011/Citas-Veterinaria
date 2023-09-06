const Paciente = () => {
  return (
    <div className="m-3 px-5 py-10 rounded-lg bg-white shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""} <span className="font-normal normal-case">Scrapy</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Luis</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">correo@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">10/05/2023</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum
          similique non cumque deleniti? Perferendis, dolor ea debitis error et
          nostrum reiciendis aperiam facere mollitia odio eum ipsum quod rerum!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
