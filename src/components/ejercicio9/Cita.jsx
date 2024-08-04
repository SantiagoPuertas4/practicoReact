import PropTypes from "prop-types";
import { randomAvatar } from "../../helpers/helpers";

const Cita = (props) => {
  const { cita, setCitas } = props;

  const randomAvatarURL = randomAvatar();

  const handleDelete = () => {
    setCitas((citasPrevias) =>
      citasPrevias.filter((citasPrevias) => citasPrevias.id !== cita.id)
    );
  };

  return (
    <div className="col-12 col-md-4 my-2">
      <div className="card p-2 bg-dark-subtle">
        <div className="d-flex">
          <div className="w-25">
            <img
              className="avatar mb-2"
              src={randomAvatarURL}
              alt={cita.nombreMascota}
            />
          </div>
          <div className="mt-3 px-2">
            <h4 className="m-0">Mascota: {cita.nombreMascota}</h4>
            <h6>Dueño: {cita.nombreDuenio}</h6>
          </div>
        </div>
        <hr className="m-0" />
        <div className=" w-100 px-2 my-2">
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
            className="btn btn-danger my-2 align-self-end"
            onClick={handleDelete}
          >
            Borrar X
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
