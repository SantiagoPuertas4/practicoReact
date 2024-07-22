import PropTypes from "prop-types";
// import { useState } from "react";
const Msg = (props) => {
  const { mensaje } = props;

  // const [mensaje, setmensaje] = useState("");

  return (
    <div className="container pt-5 d-flex justify-content-center mt-3">
      <p className="fs-1">Hola {mensaje}!</p>
    </div>
  );
};
export default Msg;

Msg.propTypes = {
  mensaje: PropTypes.array.isRequired,
};
