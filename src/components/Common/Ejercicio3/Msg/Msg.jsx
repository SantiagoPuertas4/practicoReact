import PropTypes from "prop-types";
import { useState } from "react";
const Msg = (props) => {
  const { mensaje } = props;
  const [msgCompleto, setmsgCompleto] = useState(mensaje);

  const handleChange = () => {
    setmsgCompleto((anterior) => anterior + " (from changes state)");
  };

  return (
    <div className="container pt-5 d-flex flex-column  align-items-center justify-content-center mt-3">
      <h1>Hola {msgCompleto}!</h1>
      <button className="btn btn-primary" onClick={handleChange}>
        Cliqueame (useState)
      </button>
    </div>
  );
};
export default Msg;

Msg.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
