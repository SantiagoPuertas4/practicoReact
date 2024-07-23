import { useState } from "react";
import { useRef } from "react";
import { randomId } from "../helpers/helpers";
import Tareas from "../components/Ejercicio4/Tareas";

const Ejercicio4View = () => {
  const [tareas, setTareas] = useState([]);

  const inputTarea = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tareaIngresada = inputTarea.current.value;

    if (tareaIngresada) {
      setTareas(
        (state) => [...state, { id: randomId(), text: tareaIngresada }],
        e.target.reset()
      );
    }
  };

  return (
    <>
      <div className="mt-5 pt-3">
        <div className="d-flex flex-column align-items-center border">
          <div>
            <h1>Bienvenido</h1>
          </div>
          <div className="d-flex flex-column align-items-start">
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="inputTarea">
                Tarea a agregar
              </label>
              <input
                id="inputTarea"
                className="form-control"
                type="text"
                placeholder="La tarea"
                ref={inputTarea}
              />
              <button type="submit" className="btn btn-primary mt-1">
                Agregar
              </button>
            </form>
            <ul className="list-group my-2">
              {tareas.length === 0 && (
                <p className="text-center">No hay tareas</p>
              )}
              {tareas.map((tarea) => (
                <Tareas key={tarea.id} tarea={tarea} setTareas={setTareas} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ejercicio4View;
