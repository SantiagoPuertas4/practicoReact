import Titulo from "../components/ejercicio11/Titulo";
import Formulario from "../components/ejercicio12/Formulario";

const Ejercicio12View = () => {
  return (
    <div className="mt-5 pt-3 pb-2 mb-2">
      <div className="bg-dark-subtle rounded-2">
        <Titulo />
        <section>
          <Formulario />
        </section>
        <section></section>
      </div>
    </div>
  );
};
export default Ejercicio12View;
