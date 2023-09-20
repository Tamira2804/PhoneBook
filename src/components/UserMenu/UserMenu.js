import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import './UserMenu.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);
  const avatar = defaultAvatar;

  return (
    <div className="user-container">
      <img src={avatar} alt="" width="32" className="user-avatar" />
      <span className="user-name">Welcome, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className="LogOut__btn"
      >
        LogOut
      </button>
    </div>
  );
}
