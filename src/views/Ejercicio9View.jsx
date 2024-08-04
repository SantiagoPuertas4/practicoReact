import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { randomId } from "../helpers/helpers";
import Cita from "../components/ejercicio9/Cita";

const citasLS = JSON.parse(localStorage.getItem("citas")) || [];

const Ejercicio9View = () => {
  const [citas, setCitas] = useState(citasLS);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (data) => {
    const { nombre, bicho, fecha, hora, sintomas } = data;
    setCitas((prevCitas) => [
      ...prevCitas,
      {
        id: randomId(),
        nombre: nombre,
        bicho: bicho,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas,
      },
    ]);
    console.log(citas);
    reset();
  };
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
          <h4 className="text-center">
            Llene el formulario para crear una cita
          </h4>
        </div>
        <hr />
        <form
          className="w-100 d-flex flex-column"
          onSubmit={onSubmitRHF(handleSubmit)}
        >
          <div className="mx-3 d-flex flex-column">
            <section className="row">
              <fieldset className="col-12 col-md-6">
                <label className="form-label" htmlFor="input-nombre-mascota">
                  Nombre del dueño
                </label>
                <input
                  id="input-nombre-mascota"
                  className={`form-control ${
                    errors.nombreMascota ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Eze"
                  {...register("nombreMascota", {
                    required: "El campo es requerido",
                    maxLength: {
                      value: 50,
                      message: "El nombre no debe tener mas de 50 caracteres",
                    },
                    minLength: {
                      value: 3,
                      message: "El nombre no debe tener menos de 3 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
                      message:
                        "El nombre debe tener unicamente siglas y espacios",
                    },
                  })}
                />
                <div className="invalid-feedback">
                  <span className="badge text-bg-danger">
                    {errors.nombreMascota?.message}
                  </span>
                </div>
              </fieldset>
              <fieldset className="col-12 col-md-6">
                <label className="form-label" htmlFor="input-nombre">
                  Nombre del bicho
                </label>
                <input
                  id="input-nombre"
                  className={`form-control ${
                    errors.nombre ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Gabi"
                  {...register("nombre", {
                    required: "El campo es requerido",
                    maxLength: {
                      value: 50,
                      message: "El nombre no debe tener mas de 50 caracteres",
                    },
                    minLength: {
                      value: 3,
                      message: "El nombre no debe tener menos de 3 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
                      message:
                        "El nombre debe tener unicamente siglas y espacios",
                    },
                  })}
                />
                <div className="invalid-feedback">
                  <span className="badge text-bg-danger">
                    {errors.nombre?.message}
                  </span>
                </div>
              </fieldset>
              <fieldset className="col-12 col-md-6 mt-3">
                <label className="form-label" htmlFor="input-fecha">
                  Fecha de la cita
                </label>
                <input
                  id="input-fecha"
                  className={`form-control ${errors.fecha ? "is-invalid" : ""}`}
                  type="date"
                  {...register("fecha", {
                    required: "El campo es requerido",
                  })}
                />
                <div className="invalid-feedback">
                  <span className="badge text-bg-danger">
                    {errors.fecha?.message}
                  </span>
                </div>
              </fieldset>
              <fieldset className="col-12 col-md-6  mt-3">
                <label className="form-label" htmlFor="input-hora">
                  Hora de la cita
                </label>
                <input
                  id="input-hora"
                  className={`form-control ${errors.hora ? "is-invalid" : ""}`}
                  type="time"
                  {...register("hora", {
                    required: "El campo es requerido",
                  })}
                />
                <div className="invalid-feedback">
                  <span className="badge text-bg-danger">
                    {errors.hora?.message}
                  </span>
                </div>
              </fieldset>
              <fieldset className="col-12 mt-3">
                <label htmlFor="input-sintomas">Sintomas</label>
                <textarea
                  className={`form-control ${
                    errors.sintomas ? "is-invalid" : ""
                  }`}
                  id="input-sintomas"
                  {...register("sintomas", {
                    required: "El campo es requerido",
                    maxLength: {
                      value: 500,
                      message:
                        "El campo sintomas no debe tener mas de 500 caracteres",
                    },
                    minLength: {
                      value: 10,
                      message:
                        "El campo sintomas no debe tener menos de 10 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/,
                      message:
                        "El nombre debe tener unicamente siglas y espacios",
                    },
                  })}
                ></textarea>
                <div className="invalid-feedback">
                  <span className="badge text-bg-danger">
                    {errors.sintomas?.message}
                  </span>
                </div>
              </fieldset>
            </section>
            <div className=" align-self-end my-3">
              <button type="submit" className="btn btn-primary">
                Agendar cita
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container">
        <Cita />
      </div>
    </div>
  );
};
export default Ejercicio9View;
