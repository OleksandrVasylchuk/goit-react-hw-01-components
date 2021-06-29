import PropTypes from "prop-types";
import s from "./Friendlist.module.css";

const FrendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={(s.status, isOnline ? s.online : s.offline)} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FrendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export default FrendItem;
