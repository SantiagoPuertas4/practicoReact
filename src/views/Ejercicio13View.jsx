import { useQuery } from "@tanstack/react-query";
import Clima from "../components/Ejercicio13/Clima";
import Formulario from "../components/Ejercicio13/Formulario";
import { getCoords, getWeather } from "../api/clima";

const Ejercicio13View = () => {
  const {
    data: coords,
    isError: isErrorCoords,
    isLoading: isLoadingCoords,
    isSuccess: isSuccessCoords,
  } = useQuery({
    queryKey: ["coords"],
    queryFn: (query) => getCoords(query),
    enabled: false,
    retry: 3,
  });

  const {
    data: weather,
    isError: isErrorWeather,
    isLoading: isLoadingWeather,
    isSuccess: isSuccessWeather,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: (query) => getWeather(query),
    enabled: false,
    retry: 3,
  });

  return (
    <div className="mt-5 pt-3 pb-2 mb-2">
      <section>
        <Formulario isSuccessCoords={isSuccessCoords} coords={coords} />
      </section>
      <section className="d-flex justify-content-center mt-2">
        <Clima
          isErrorCoords={isErrorCoords}
          isLoadingCoords={isLoadingCoords}
          isSuccessCoords={isSuccessCoords}
          weather={weather}
          isErrorWeather={isErrorWeather}
          isLoadingWeather={isLoadingWeather}
          isSuccessWeather={isSuccessWeather}
        />
      </section>
    </div>
  );
};
export default Ejercicio13View;
