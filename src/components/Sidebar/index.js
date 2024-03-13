import { NavSide, NavSideItem } from './styled';
import PropTypes from 'prop-types';
import { sideBarItems } from './const';
//import { FaHouseUser } from 'react-icons/fa';

export default function Sidebar({ sidebarExpanded }) {
  // const [open, setOpen] = React.useState(false);

  return (
    <NavSide $sidebarExpanded={sidebarExpanded}>
      <ul>
        {sideBarItems.map((item, index) => (
          <NavSideItem key={index} $sidebarExpanded={sidebarExpanded}>
            {item.icon}
            <div>{item.title}</div>
          </NavSideItem>
        ))}
      </ul>
    </NavSide>
  );
}

Sidebar.propTypes = {
  sidebarExpanded: PropTypes.bool.isRequired,
};
