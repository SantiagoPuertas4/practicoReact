import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = (props) => {
  const { listaEmpleados } = props;
  return (
    <div>
      {listaEmpleados.map((empleado) => (
        <EmpleadoRow key={empleado.id} empleado={empleado} />
      ))}
    </div>
  );
};
export default EmpleadoList;
EmpleadoRow.propTypes = {
  listaEmpleados: PropTypes.array.isRequired,
};
