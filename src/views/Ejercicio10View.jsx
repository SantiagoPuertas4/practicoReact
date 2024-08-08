import { useEffect } from "react";

const peliculasLS = JSON.parse(localStorage.getItem("peliculas")) || [];

const Ejercicio10View = () => {
  const [peliculas, setPeliculas] = useState(peliculasLS);

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <div className="mt-5 pt-3 pb-2 mb-2">
      <div className="container bg-dark-subtle rounded-2">
        <h2 className="text-center">Administrador de peliculas</h2>
        <hr />
        <form>
          <fieldset>
            <label className="form-label" htmlFor=""></label>
            <input type="text" />
            <div>
              <span></span>
            </div>
          </fieldset>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Ejercicio10View;
