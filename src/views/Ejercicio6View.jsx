import { useEffect, useState } from "react";
import ColorForm from "../components/ejercicio6/ColorForm";

const colorsLS = JSON.parse(localStorage.getItem("colors")) || [];

const Ejercicio6View = () => {
  const [colors, setColors] = useState(colorsLS);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div className="mt-5 pt-3 pb-2 w-100">
      <ColorForm setColors={setColors} />
    </div>
  );
};
export default Ejercicio6View;
