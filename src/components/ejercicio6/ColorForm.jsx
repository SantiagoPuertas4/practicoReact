import { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { randomId } from "../../helpers/helpers";

const ColorForm = (props) => {
  const { setColors } = props;

  const [color, setColor] = useState("#000000");

  const $colorPicker = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors((prevColors) => [
      ...prevColors,
      {
        id: randomId(),
        value: color,
      },
    ]);
  };

  const handleChange = () => {
    setColor($colorPicker.current.value);
  };

  return (
    <div className="container bg-dark-subtle rounded-2">
      <h3 className="text-center">Color a agregar</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <div className="d-flex mb-2">
          <input
            className="color-box"
            type="color"
            onChange={handleChange}
            ref={$colorPicker}
            //El navegador tira un error, preguntar a que se debe
          />
          <div className="align-self-center ms-2 bg-white rounded-2">
            <p className="m-2">{color}</p>
          </div>
        </div>
        <div className="mb-2">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
};
export default ColorForm;

ColorForm.propTypes = {
  setColors: PropTypes.func.isRequired,
};
