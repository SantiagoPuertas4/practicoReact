import PropTypes from "prop-types";
import ErrorCoords from "./ErrorCoords";
import LoadingCoords from "./LoadingCoords";
import LoadingWeather from "./LoadingWeather";
import ErrorWeather from "./ErrorWeather";
import PanelClima from "./PanelClima";

const Clima = (props) => {
  const {
    isErrorCoords,
    isLoadingCoords,
    isSuccessCoords,
    weather,
    isErrorWeather,
    isLoadingWeather,
    isSuccessWeather,
  } = props;

  if (isSuccessCoords) {
    return (
      <div>
        {isErrorWeather && <ErrorWeather />}
        {isLoadingWeather && <LoadingWeather />}
        {isSuccessWeather && <PanelClima weather={weather} />}
      </div>
    );
  }

  return (
    <div>
      {isErrorCoords && <ErrorCoords />}
      {isLoadingCoords && <LoadingCoords />}
    </div>
  );
};
export default Clima;
Clima.propTypes = {
  isErrorCoords: PropTypes.bool,
  isLoadingCoords: PropTypes.bool,
  isSuccessCoords: PropTypes.bool,
  weather: PropTypes.object,
  isErrorWeather: PropTypes.bool,
  isLoadingWeather: PropTypes.bool,
  isSuccessWeather: PropTypes.bool,
};
