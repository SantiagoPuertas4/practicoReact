import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getCoords, getWeather } from "../../api/clima";

const Formulario = () => {
  const queryClient = useQueryClient();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = async (data) => {
    const { inputUbicacion } = data;
    const coords = await queryClient.fetchQuery({
      queryKey: ["coords"],
      queryFn: () => getCoords(inputUbicacion),
    });

    if (coords && coords.length > 0) {
      const lat = coords[0].lat;
      const lon = coords[0].lon;

      await queryClient.fetchQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather(lat, lon),
      });
    }
    reset();
  };

  return (
    <div className="bg-dark-subtle rounded-2 p-3">
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <fieldset>
          <label className="form-label" htmlFor="inputUbicacion">
            Ingresa aqui la ubicacion
          </label>
          <input
            className={`form-control ${
              errors.inputUbicacion ? "is-invalid" : ""
            }`}
            id="inputUbicacion"
            type="text"
            {...register("inputUbicacion", {
              required: "Este campo es requerido",
              minLength: {
                value: 3,
                message:
                  "El campo Ubicacion no puede tener menos de 3 caracteres",
              },
              maxLength: {
                value: 30,
                message:
                  "El campo Ubicacion no puede tener mas de 30 caracteres",
              },
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.inputUbicacion?.message}
            </span>
          </div>
        </fieldset>
        <div className="mt-2">
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
