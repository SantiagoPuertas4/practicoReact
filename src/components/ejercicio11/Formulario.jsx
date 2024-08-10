import { useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { getNewsFN } from "./news";

const Formulario = (props) => {
  const { register, reset, errors, onSubmitRHF } = props;

  const queryClient = useQueryClient();

  const handleSubmit = async (data) => {
    const { busqueda } = data;
    await queryClient.fetchQuery({
      queryKey: ["news"],
      queryFn: () => getNewsFN(busqueda),
    });
    reset();
  };

  return (
    <div>
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <fieldset>
          <label className="form-label" htmlFor="inputBusqueda">
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
        <div>
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Formulario;
Formulario.propTypes = {
  register: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmitRHF: PropTypes.func.isRequired,
};
