import { useEffect, useState } from "react";

const colorsLS = JSON.parse(localStorage.getItem("colors")) || [];

const Ejercicio6View = () => {
  const [colors, setColors] = useState(colorsLS);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return <div className="mt-5 pt-3 w-100"></div>;
};
export default Ejercicio6View;
