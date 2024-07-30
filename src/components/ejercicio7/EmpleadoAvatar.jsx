import PropTypes from "prop-types";
import { randomAvatar } from "../../helpers/helpers";

const EmpleadoAvatar = (props) => {
  const { empleado } = props;

  const randomAvatarURL = randomAvatar();

  return (
    <div className="w-25">
      <img src={randomAvatarURL} alt={empleado.fullName} />
    </div>
  );
};
export default EmpleadoAvatar;

EmpleadoAvatar.propTypes = {
  empleado: PropTypes.any.isRequired,
};
