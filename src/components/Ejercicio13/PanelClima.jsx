import PropTypes from "prop-types";

const PanelClima = (props) => {
  const { weather } = props;

  return (
    <div className="bg-dark-subtle rounded-2">
      <div className="d-flex justify-content-center">
        <img
          className="w-25 h-25"
          src="https://cdn-icons-png.flaticon.com/512/3721/3721881.png"
          alt="Icono clima"
        />
      </div>
      <div className="d-flex justify-content-center">
        <p>Temperatura:{weather.main.temp}</p>
      </div>
      <div className="d-flex justify-content-center">
        <p>Sensacion termica:{weather.main.feels_like}</p>
      </div>
      <div className="d-flex justify-content-center">
        <p>Maxima: {weather.main.temp_max}</p>
      </div>
      <div className="d-flex justify-content-center">
        <p>Minima:{weather.main.temp_min}</p>
      </div>
    </div>
  );
};
export default PanelClima;
PanelClima.propTypes = {
  weather: PropTypes.object,
};
