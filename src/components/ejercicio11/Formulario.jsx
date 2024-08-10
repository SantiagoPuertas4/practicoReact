import { useQueryClient } from "@tanstack/react-query";
import { getNewsFN } from "./news";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const queryClient = useQueryClient();

  const handleSubmit = async (data) => {
    const { busqueda } = data;
    await queryClient.fetchQuery({
      queryKey: ["news"],
      queryFn: () => getNewsFN(busqueda),
    });
    reset();
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  return (
    <div>
      <form className="p-3" onSubmit={onSubmitRHF(handleSubmit)}>
        <fieldset>
          <label className="form-label text-white m-0" htmlFor="inputBusqueda">
            Termino a buscar
          </label>
          <input
            className={`form-control ${errors.busqueda ? "is-invalid" : ""}`}
            type="text"
            id="inputBusqueda"
            {...register("busqueda", {
              required: "El campo es requerido",
              maxLength: {
                value: 20,
                message: "El campo no debe tener mas de 20 caracteres",
              },
              minLength: {
                value: 1,
                message: "El campo no debe tener menos de 3 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "El campo solo acepta letras",
              },
            })}
          />
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.busqueda?.message}
            </span>
          </div>
        </fieldset>
        <div className="d-flex align-items-end flex-column mt-2">
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Formulario;
