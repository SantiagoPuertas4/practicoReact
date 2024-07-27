const ColorForm = (props) => {
  const { setColors } = props;

  const colorPicker = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container bg-dark-subtle rounded-2 ">
      <form className="d-flex justify-content-center">
        <input type="color" ref={colorPicker} />
        <div>
          <button type="submit" onClick={handleSubmit} className="btn">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
export default ColorForm;

ColorForm.propTypes = {
  setColors: PropTypes.func.isRequired,
};
