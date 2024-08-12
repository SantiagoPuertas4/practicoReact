import EmpleadoRow from "./EmpleadoRow";
import PropTypes from "prop-types";

const EmpleadoList = (props) => {
  const { listaEmpleados } = props;
  return (
    <section className="listaEmpleados">
      {listaEmpleados.map((empleado) => (
        <EmpleadoRow key={empleado.id} empleado={empleado} />
      ))}
    </section>
  );
};
export default EmpleadoList;
EmpleadoList.propTypes = {
  listaEmpleados: PropTypes.array.isRequired,
};
