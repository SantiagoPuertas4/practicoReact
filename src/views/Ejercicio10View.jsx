import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const peliculasLS = JSON.parse(localStorage.getItem("peliculas")) || [];

const Ejercicio10View = () => {
  const [peliculas, setPeliculas] = useState(peliculasLS);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = () => {};

  return (
    <div className="mt-5 pt-3 pb-2 mb-2">
      <div className="container bg-dark-subtle rounded-2">
        <h2 className="text-center">Administrador de peliculas</h2>
        <hr />
        <form onSubmit={onSubmitRHF(handleSubmit)}>
          <fieldset>
            <label className="form-label" htmlFor="inputNombrePelicula">
              Nombre de la pelicula
            </label>
            <input
              id="inputNombrePelicula"
              className={`form-control ${
                errors.nombrePelicula ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="Avatar"
              {...register("nombrePelicula", {
                required: "El campo nombre es requerido",
                maxLength: {
                  value: 100,
                  message: "El nombre no debe tener mas de 100 caracteres",
                },
                minLength: {
                  value: 3,
                  message: "El nombre no debe tener menos de 3 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9\s,.]+$/,
                  message:
                    "El nombre debe tener unicamente siglas, numeros, espacios, coma y punto",
                },
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.nombrePelicula?.message}
              </span>
            </div>
          </fieldset>
          <fieldset>
            <label className="form-label" htmlFor="inputDescripcionPelicula">
              Descripcion de la pelicula
            </label>
            <textarea
              id="inputDescripcionPelicula"
              className={`form-control ${
                errors.descripcionPelicula ? "is-invalid" : ""
              }`}
              type="text"
              placeholder="Inserte texto generado"
              {...register("descripcionPelicula", {
                required: "El campo descripcion es requerido",
                maxLength: {
                  value: 500,
                  message: "La descripcion no debe tener mas de 500 caracteres",
                },
                minLength: {
                  value: 20,
                  message:
                    "La descripcion no debe tener menos de 20 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9\s,."()]+$/,
                  message:
                    "La descripcion debe tener unicamente siglas, numeros, espacios, coma, punto, comillas dobles y parentesis",
                },
              })}
            />
            <div className="invalid-feedback">
              <span className="badge text-bg-danger">
                {errors.descripcionPelicula?.message}
              </span>
            </div>
          </fieldset>

          <div>
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Ejercicio10View;
