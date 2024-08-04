import PropTypes from "prop-types";
import "./styles.css";

const ColorItem = (props) => {
  const { color, setColors } = props;

  const handleDelete = () => {
    setColors(
      (coloresPrevios) =>
        coloresPrevios.filter(
          (coloresPrevios) => coloresPrevios.id !== color.id
        )
      //Preguntar de donde toma los valores coloresPrevios
    );
  };

  return (
    <div className="col-12 col-md-4 col-lg-3 my-1">
      <div className="card p-2 bg-dark-subtle">
        <h3>{color.value}</h3>
        <div className="d-flex justify-content-center my-1 bg-white">
          <div
            style={{ backgroundColor: color.value }}
            className="colorCard my-2"
          ></div>
        </div>
        <div className="d-flex justify-content-end">
          <button onClick={handleDelete} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
export default ColorItem;
ColorItem.propTypes = {
  color: PropTypes.string.isRequired,
  setColors: PropTypes.func.isRequired,
};
