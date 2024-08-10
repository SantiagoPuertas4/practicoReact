import PropTypes from "prop-types";
import Noticia from "./Noticia";

const ListaNoticias = (props) => {
  const { isLoading, isError, isSuccess, news } = props;
  console.log(news);

  // if (isSuccess) {
  //   return (
  //     <div>
  //       {news.articles.map((article) => (
  //         <Noticia key={article.source.id} article={article} />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div>
      {isSuccess &&
        news.articles.map((article) => (
          <Noticia key={article.source.id} article={article} />
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
