import { useQuery } from "@tanstack/react-query";
import { getNewsFN } from "../components/ejercicio11/news";
import Titulo from "../components/ejercicio11/Titulo";
import { useForm } from "react-hook-form";

const Ejercicio11View = () => {
  const {
    data: news,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async ({ queryKey }) => {
      getNewsFN(queryKey[1]);
    },
    enabled: false,
  });
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (data) => {
    const { busqueda } = data;
    console.log(busqueda);
    reset();
  };
  return (
    <div className="mt-5 pt-3 pb-2 mb-2">
      <section className="bg-secondary rounded-2">
        <Titulo />
        <hr />
        <div>
          <form onSubmit={onSubmitRHF(handleSubmit)}>
            <fieldset>
              <label className="form-label" htmlFor="inputBusqueda">
                Termino a buscar
              </label>
              <input
                className={`form-control ${
                  errors.busqueda ? "is-invalid" : ""
                }`}
                type="text"
                id="inputBusqueda"
                {...register("busqueda", {
                  required: "El campo es requerido",
                  maxLength: {
                    value: 20,
                    message: "El campo no debe tener mas de 20 caracteres",
                  },
                  minLength: {
                    value: 3,
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
      </section>

      <section></section>
    </div>
  );
};
export default Ejercicio11View;
