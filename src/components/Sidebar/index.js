import { NavSide, NavSideItem } from './styled';
import PropTypes from 'prop-types';
import { sideBarItems } from './const';
import { Link } from 'react-router-dom';

export default function Sidebar({ sidebarExpanded }) {
  return (
    <NavSide $sidebarExpanded={sidebarExpanded}>
      <ul>
        {sideBarItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <NavSideItem $sidebarExpanded={sidebarExpanded}>
              {item.icon}
              <div>{item.title}</div>
            </NavSideItem>
          </Link>
        ))}
      </ul>
    </NavSide>
  );
}

Sidebar.propTypes = {
  sidebarExpanded: PropTypes.bool.isRequired,
};
