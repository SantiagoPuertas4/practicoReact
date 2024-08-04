import { useEffect, useState } from "react";
import { useRef } from "react";
import { randomId } from "../helpers/helpers";
import Tarea from "../components/Ejercicio4/Tarea";

const tareasLS = JSON.parse(localStorage.getItem("tareas")) || [];

const Ejercicio5View = () => {
  const [tareas, setTareas] = useState(tareasLS);

  const inputTarea = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tareaIngresada = inputTarea.current.value;

    if (tareaIngresada) {
      setTareas((state) => [
        ...state,
        { id: randomId(), text: tareaIngresada },
      ]);
      e.target.reset();
    }
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
      <div className="mt-5 pt-3">
        <div className="d-flex flex-column align-items-center">
          <div>
            <h1>Bienvenido</h1>
          </div>
          <div className="d-flex flex-column align-items-center w-100">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label className="form-label text-center" htmlFor="inputTarea">
                Tarea a agregar
              </label>
              <div className="d-flex">
                <input
                  id="inputTarea"
                  className="form-control"
                  type="text"
                  placeholder="La tarea"
                  ref={inputTarea}
                />
                <button type="submit" className="btn btn-primary ms-1">
                  Agregar
                </button>
              </div>
            </form>
            <ul className="list-group my-2 container p-0">
              {tareas.length === 0 && (
                <p className="text-center text-break">No hay tareas</p>
              )}
              {tareas.map((tarea) => (
                <Tarea key={tarea.id} tarea={tarea} setTareas={setTareas} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ejercicio5View;
