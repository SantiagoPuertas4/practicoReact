import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getNews12FN } from "../../api/news";

const Formulario = () => {
  const queryClient = useQueryClient();

  const handleSubmit = async (data) => {
    const { inputCategoria, inputPais } = data;
    await queryClient.fetchQuery({
      queryKey: ["news"],
      queryFn: () => getNews12FN(inputCategoria, inputPais),
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
          <label className="form-label" htmlFor="inputCategoria">
            Ingresa la categoria
          </label>
          <select
            className={`form-select ${
              errors.inputCategoria ? "is-invalid" : ""
            }`}
            id="inputCategoria"
            {...register("inputCategoria", {
              required: "El campo categoria es requerido",
            })}
            defaultValue=""
          >
            <option value="" hidden disabled>
              Abre el menu
            </option>
            <option value="business">Negocios</option>
            <option value="general">General</option>
            <option value="health">Salud</option>
            <option value="science">Ciencia</option>
            <option value="sport">Deporte</option>
            <option value="technology">Tecnologia</option>
          </select>
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.inputCategoria?.message}
            </span>
          </div>
        </fieldset>
        <fieldset>
          <label className="form-label" htmlFor="inputPais">
            Ingresa el pais
          </label>
          <select
            className={`form-select ${errors.inputPais ? "is-invalid" : ""}`}
            id="inputPais"
            {...register("inputPais", {
              required: "El campo pais es requerido",
            })}
            defaultValue=""
          >
            <option value="" hidden disabled>
              Abre el menu
            </option>
            <option value="ar">Argentina</option>
            <option value="us">Estados Unidos</option>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="mx">Mexico</option>
            <option value="jp">Japon</option>
            <option value="br">Brasil</option>
            <option value="ch">Suiza</option>
          </select>
          <div className="invalid-feedback">
            <span className="badge text-bg-danger">
              {errors.inputPais?.message}
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
