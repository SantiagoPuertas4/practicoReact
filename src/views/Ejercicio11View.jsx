import { useQuery } from "@tanstack/react-query";
import { getNewsFN } from "../components/ejercicio11/news";
import Titulo from "../components/ejercicio11/Titulo";
import Formulario from "../components/ejercicio11/Formulario";
import ListaNoticias from "../components/ejercicio11/ListaNoticias";
import { useForm } from "react-hook-form";

const Ejercicio11View = () => {
  const {
    data: news,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["news"],
    queryFn: (query) => {
      getNewsFN(query);
    },
  });
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  return (
    <div className="mt-5 pt-3 pb-2 mb-2">
      <section className="bg-secondary rounded-2">
        <Titulo />
        <hr />
        <Formulario
          register={register}
          reset={reset}
          errors={errors}
          onSubmitRHF={onSubmitRHF}
          news={news}
        />
      </section>

      <section>
        <ListaNoticias
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          news={news}
        />
      </section>
    </div>
  );
};
export default Ejercicio11View;
