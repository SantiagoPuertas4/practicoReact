import "../components/ejercicio8/styles.css";
import { useForm } from "react-hook-form";

const Ejercicio8View = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = () => {
    reset();
    alert("Datos enviados!");
  };

  return (
    <div className="mt-5 mb-3 pt-3">
      <div className="container formulario rounded-2 d-flex flex-column p-3 align-items-center">
        <div className="my-2 w-25 text-center">
          <h3 className="titulo p-1">Formulario</h3>
        </div>
        <form
          className="w-100 d-flex flex-column"
          onSubmit={onSubmitRHF(handleSubmit)}
          onError={alert("Debes completar todos los campos")}
        >
          <section className="d-flex flex-row titulo flex-wrap w-100">
            <fieldset className="col-12 col-md-6 p-2">
              <label htmlFor="input-nombre" className="form-label">
                Nombre
              </label>
              <input
                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                type="text"
                id="input-nombre"
                placeholder="Pepe"
                {...register("nombre", {
                  required: "El campo nombre es requerido",
                  maxLength: {
                    value: 50,
                    message: "El nombre no puede tener mas de 50 caracteres",
                  },
                  minLength: {
                    value: 3,
                    message: "El mensaje no puede tener menos de 3 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
                    message:
                      "El nombre debe tener unicamente siglas y espacios",
                    alert: "Si",
                  },
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.nombre?.message}
                </span>
              </div>
            </fieldset>
            <fieldset className="col-12 col-md-6 p-2">
              <label htmlFor="input-apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.apellido ? "is-invalid" : ""
                }`}
                id="input-apellido"
                placeholder="Pachado"
                {...register("apellido", {
                  required: "El campo apellido es requerido",
                  maxLength: {
                    value: 50,
                    message: "El apellido no puede tener mas de 50 caracteres",
                  },
                  minLength: {
                    value: 3,
                    message: "El apellido no puede tener menos de 3 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
                    message:
                      "El apellido debe tener unicamente siglas y espacios",
                  },
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.apellido?.message}
                </span>
              </div>
            </fieldset>
            <fieldset className="col-12 col-md-6 p-2">
              <label htmlFor="input-dni" className="form-label">
                DNI
              </label>
              <input
                type="text"
                className={`form-control ${errors.dni ? "is-invalid" : ""}`}
                id="input-dni"
                placeholder="10101010"
                {...register("dni", {
                  required: "El campo DNI es requerido",
                  maxLength: {
                    value: 10,
                    message: "El DNI no puede tener mas de 10 caracteres",
                  },
                  minLength: {
                    value: 6,
                    message: "El DNi debe tener al menos 6 caracteres",
                  },
                  pattern: {
                    value: /^(\d{2}\.\d{3}\.\d{3}|\d{8})$/,
                    message:
                      "El campo DNI unicamente acepta numeros y puntos con el formato DNI (con y sin puntos)",
                  },
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.dni?.message}
                </span>
              </div>
            </fieldset>
            <fieldset className="col-12 col-md-6 p-2">
              <label htmlFor="input-email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="input-email"
                placeholder="prueba@dominio.com"
                {...register("email", {
                  required: "El campo email es requerido",
                  maxLength: {
                    value: 200,
                    message: "El email no debe tener mas de 200 caracteres",
                  },
                  minLength: {
                    value: 10,
                    message: "El email debe tener mas de 10 caracteres",
                  },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "El campo email solo acepta emails validos",
                  },
                })}
              />
              <div className="invalid-feedback">
                <span className="badge text-bg-danger">
                  {errors.email?.message}
                </span>
              </div>
            </fieldset>
          </section>
          <div className="align-self-end mt-3 bg-white p-2 rounded-2">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Ejercicio8View;
