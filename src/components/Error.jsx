const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase rounded-lg my-4">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
