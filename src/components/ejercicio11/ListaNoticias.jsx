import PropTypes from "prop-types";
import Noticia from "./Noticia";
import { randomId } from "../../helpers/helpers";
import LoadingArticles from "./LoadingArticles";
import ErrorArticles from "./ErrorArticles";

const ListaNoticias = (props) => {
  const { isLoading, isError, isSuccess, news } = props;

  return (
    <div>
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
