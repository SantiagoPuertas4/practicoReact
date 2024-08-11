const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getCoords = async (ciudad) => {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=${WEATHER_API_KEY}`
  );
  const data = await res.json();

  if (!res.ok) throw new Error("Ocurrio un error");
  return data;
};

export const getWeather = async (latitud, longitud) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=${WEATHER_API_KEY}`
  );
  const data = await res.json();

  if (!res.ok) throw new Error("Ocurrio un error");
  return data;
};
