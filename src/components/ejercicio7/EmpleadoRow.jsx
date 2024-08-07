import PropTypes from "prop-types";
import "./styles.css";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  const { empleado } = props;

  return (
    <article className="rowEmpleado w-100 px-3">
      <div className="d-flex w-75">
        <EmpleadoAvatar empleado={empleado} />
        <section>
          <div>
            <h3>{empleado.fullName}</h3>
          </div>
          <div className="d-flex">
            <div className="me-2">
              <p>{empleado.title}</p>
            </div>
            <div>
              <p className="departamento px-1">{empleado.department}</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};
export default EmpleadoRow;

EmpleadoRow.propTypes = {
  empleado: PropTypes.object.isRequired,
};
