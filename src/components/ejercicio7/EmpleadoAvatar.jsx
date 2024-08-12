import PropTypes from "prop-types";
import { randomAvatar } from "../../helpers/helpers";

const EmpleadoAvatar = (props) => {
  const { empleado } = props;

  const randomAvatarURL = randomAvatar();

  return (
    <section className="w-25">
      <img src={randomAvatarURL} alt={empleado.fullName} />
    </section>
  );
};
export default EmpleadoAvatar;

EmpleadoAvatar.propTypes = {
  empleado: PropTypes.object.isRequired,
};
