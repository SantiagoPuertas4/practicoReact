import PropTypes from "prop-types";
import LoadingArticles from "../ejercicio11/LoadingArticles";
import ErrorArticles from "../ejercicio11/ErrorArticles";
import { randomId } from "../../helpers/helpers";
import Noticia from "./Noticia";

const ListaNoticias = (props) => {
  const { isLoading, isError, isSuccess, news } = props;

  return (
    <div className="row">
      {isLoading && <LoadingArticles />}
      {isError && <ErrorArticles />}
      {isSuccess &&
        news.articles.map((article) => (
          <Noticia key={randomId()} article={article} />
        ))}
    </div>
  );
};
export default ListaNoticias;
ListaNoticias.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  news: PropTypes.object,
};
