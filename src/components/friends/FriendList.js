import PropTypes from "prop-types";
import FriendItem from "./FriendItem";
import s from "./Friendlist.module.css";

const FriendList = ({ friends }) => (
  <ul className={s.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
