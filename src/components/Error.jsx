// import { PropTypes } from "prop-types";

const Error = ({ mensaje }) => {
  console.log(typeof mensaje);
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase rounded-lg my-4">
      <p>{mensaje}</p>
    </div>
  );
};

// Error.propTypes = {
//   mensaje: PropTypes.string,
// };
export default Error;
