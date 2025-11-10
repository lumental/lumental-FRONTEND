import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faChartSimple, } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHouse, faUser } from '@fortawesome/free-regular-svg-icons';


export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/aichat">
      <FontAwesomeIcon icon={faComment} style={{ fontSize: "22px" }} />
      </NavLink>

      <NavLink to="/report">
      <FontAwesomeIcon icon={faListUl} style={{ fontSize: "22px" }} />
      </NavLink> 

      <NavLink to="/">
      <FontAwesomeIcon icon={faHouse} style={{ fontSize: "22px" }} />
      </NavLink>

      <NavLink to="/checklist">
      <FontAwesomeIcon icon={faChartSimple} style={{ fontSize: "22px" }} />
      </NavLink>

      <NavLink to="/mypage">
      <FontAwesomeIcon icon={faUser} style={{ fontSize: "22px" }} />
      </NavLink>
    </nav>
  );
}
