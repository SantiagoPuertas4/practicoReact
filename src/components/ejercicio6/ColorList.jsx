import PropTypes from "prop-types";
import ColorItem from "./ColorItem";

const ColorList = (props) => {
  const { colors, setColors } = props;

  return (
    <div className="container row my-2 d-flex justify-content-center m-0">
      {colors.map((color) => (
        <ColorItem key={color.id} color={color} setColors={setColors} />
      ))}
    </div>
  );
};
export default ColorList;

ColorList.propTypes = {
  colors: PropTypes.string.isRequired,
  setColors: PropTypes.func.isRequired,
};
