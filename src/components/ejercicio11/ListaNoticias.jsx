import PropTypes from "prop-types";

const ListaNoticias = (props) => {
  const { isLoading, isError, isSuccess, news } = props;
  return <div>sdfgh</div>;
};
export default ListaNoticias;
ListaNoticias.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  news: PropTypes.object.isRequired,
};
