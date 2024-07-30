import EmpleadoRow from "./EmpleadoRow";
import PropTypes from "prop-types";

const EmpleadoList = (props) => {
  const { listaEmpleados } = props;
  return (
    <div className="listaEmpleados">
      {listaEmpleados.map((empleado) => (
        <EmpleadoRow key={empleado.id} empleado={empleado} />
      ))}
    </div>
  );
};
export default EmpleadoList;
EmpleadoList.propTypes = {
  listaEmpleados: PropTypes.array.isRequired,
};
