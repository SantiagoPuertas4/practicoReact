import PropTypes from "prop-types";

const Cita = (props) => {
  const { cita, setCitas } = props;

  const handleDelete = () => {
    setCitas((citasPrevias) =>
      citasPrevias.filter((citasPrevias) => citasPrevias.id !== cita.id)
    );
  };

  return (
    <div className="col-12 col-lg-3 col-md-4 my-2">
      <div className="card p-2 bg-dark-subtle">
        <div className="mt-3 px-2">
          <p>Nombre: {cita.nombreMascota}</p>
        </div>
        <hr className="m-0" />
        <div className=" w-100 px-2 my-2">
          <div>
            <p>Dueño: {cita.nombreDuenio}</p>
          </div>
          <div>
            <p>Fecha (Año-Mes-Dia): {cita.fecha}</p>
          </div>
          <div>
            <p>Hora: {cita.hora}</p>
          </div>
          <div>
            <p className="m-0">Sintomas: {cita.sintomas}</p>
          </div>
        </div>
        <hr className="m-0" />
        <div className="d-flex flex-column px-2">
          <button
            className="btn btn-danger my-3 align-self-end"
            onClick={handleDelete}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cita;

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  setCitas: PropTypes.func.isRequired,
};
