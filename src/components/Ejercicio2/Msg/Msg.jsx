import PropTypes from "prop-types";
const Msg = (props) => {
  const { mensaje } = props;

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
