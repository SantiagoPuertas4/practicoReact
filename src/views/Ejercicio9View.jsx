const Ejercicio9View = () => {
  return (
    <div className="mt-5 pt-3 mb-2">
      <div className="container bg-dark-subtle rounded-2">
        <div>
          <h2 className="text-center pt-2">
            Administrador de pacientes de veterinaria
          </h2>
        </div>
        <hr />
        <div>
          <h3 className="text-center">
            Llenar el formulario para crear una cita
          </h3>
        </div>
        <hr />
        <form className="" action="">
          <fieldset>
            <label className="form-label" htmlFor="">
              Nombre de la mastoca
            </label>
            <input className="form-control" type="text" />
            <div>
              <span></span>
            </div>
          </fieldset>
          <div>
            <button type="submit" className="btn btn-primary">
              Agendar cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Ejercicio9View;
