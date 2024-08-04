import EmpleadoList from "../components/ejercicio7/EmpleadoList";
import "../components/ejercicio7/styles.css";
import { listaEmpleados } from "../constants/listaEjercicio7";

const Ejercicio7View = () => {
  return (
    <div className="mt-5 mb-3 pt-3 container listaCompleta">
      <EmpleadoList listaEmpleados={listaEmpleados} />
    </div>
  );
};
export default Ejercicio7View;
