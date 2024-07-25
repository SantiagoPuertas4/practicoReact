import PropTypes from "prop-types";

const Tareas = (props) => {
  const { tarea, setTareas } = props;

  const handleDelete = () => {
    setTareas((state) => state.filter((key) => key.id !== tarea.id));
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between w-100">
      <p>{tarea.text}</p>
      <button className="btn btn-danger ms-2" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};
export default Tareas;

Tareas.propTypes = {
  tarea: PropTypes.object.isRequired,
  setTareas: PropTypes.func.isRequired,
};
