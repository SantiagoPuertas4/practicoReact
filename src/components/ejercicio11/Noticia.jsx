import PropTypes from "prop-types";
import "./styles.css";

const Noticia = (props) => {
  const { article } = props;
  return (
    <article className="col-12 col-md-4 my-2 ">
      <div className="card h-100 d-flex justify-content-between">
        <section className="p-3 mt-2">
          <div>
            <h3 className="text-break text-center">{article.title}</h3>
          </div>
          <div>
            <p className="text-center">{article.description}</p>
          </div>
        </section>
        <section>
          <div>
            <img
              className="w-100"
              src={article.urlToImage}
              alt={article.title}
            />
          </div>
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
