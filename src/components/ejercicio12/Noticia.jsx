import PropTypes from "prop-types";
import "../ejercicio11/styles.css";

const Noticia = (props) => {
  const { article } = props;

  return (
    <article className="col-12 col-md-4 my-2 ">
      <div className="card h-100 d-flex justify-content-between bg-dark-subtle">
        <section className="p-3 mt-2">
          <div>
            <h4 className="text-break text-center">{article.title}</h4>
          </div>
        </section>
        <section>
          <div>
            <a className="text-center link" target="_blank" href={article.url}>
              <p className="py-2 m-0 ">Clickea aca para ver mas</p>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};
export default Noticia;
Noticia.propTypes = {
  article: PropTypes.object.isRequired,
};
