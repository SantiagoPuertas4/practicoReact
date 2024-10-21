import PropTypes from "prop-types";

const Pelicula = (props) => {
  const handleDelete = () => {
    setPeliculas((peliculasPrevias) =>
      peliculasPrevias.filter(
        (peliculasPrevias) => peliculasPrevias.id !== pelicula.id
      )
    );
  };

  const { pelicula, setPeliculas } = props;
  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <div className="my-2 ms-3">
          <h3 className="m-0">{pelicula.nombre}</h3>
        </div>
        <hr className="m-0" />
        <div className="my-2 ms-3">
          <div>
            <p className="text-break m-0">
              <b>Descripcion: </b> {pelicula.descripcion}
            </p>
          </div>
          <div>
            <p className="text-break m-0">
              <b>Genero: </b> {pelicula.genero}
            </p>
          </div>
        </div>
        <hr className="m-0" />
        <div className="d-flex flex-column align-items-end m-2">
          <button onClick={handleDelete} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pelicula;
Pelicula.propTypes = {
  pelicula: PropTypes.object.isRequired,
  setPeliculas: PropTypes.func.isRequired,
};
