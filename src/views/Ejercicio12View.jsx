import { useQuery } from "@tanstack/react-query";
import Titulo from "../components/ejercicio11/Titulo";
import Formulario from "../components/ejercicio12/Formulario";
import { getNews12FN } from "../api/news";
import ListaNoticias from "../components/ejercicio12/ListaNoticias";

const Ejercicio12View = () => {
  const {
    data: news,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["news"],
    queryFn: (query) => {
      getNews12FN(query);
    },
    enabled: false,
  });
  return (
    <div className="mt-5 pt-3 pb-2 mb-2">
      <section className="bg-dark-subtle rounded-2">
        <Titulo />
        <p className="text-center">
          Disclaimer: para poder hacer fetch con categoria y pais se tuvo que
          usar un tipo de noticia que no incluye imagen, descripcion ni
          contenido
        </p>
        <Formulario />
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
export default Ejercicio12View;
