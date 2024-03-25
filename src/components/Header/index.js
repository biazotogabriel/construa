import {
  NavHeader,
  ExpandButton,
  SearchInput,
  UserOptionsBar,
  UserOptionsBarItem,
} from './styled';
import PropTypes from 'prop-types';
import { PiCaretRightBold } from 'react-icons/pi';
import { IoIosNotifications } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';

export default function Header({
  sidebarExpanded,
  handleSidebarExpansion,
  handleLoggedIn,
}) {
  return (
    <NavHeader>
      <ExpandButton
        $sidebarExpanded={sidebarExpanded}
        onClick={handleSidebarExpansion}
      >
        <button>
          <PiCaretRightBold />
        </button>
      </ExpandButton>
      <SearchInput>
        <input
          type="text"
          name="searchbar"
          placeholder="Digite algo..."
        ></input>
      </SearchInput>
      <UserOptionsBar>
        <UserOptionsBarItem>
          <IoIosNotifications />
        </UserOptionsBarItem>
        <UserOptionsBarItem
          onClick={() => {
            handleLoggedIn(false);
          }}
        >
          <FaUser />
        </UserOptionsBarItem>
      </UserOptionsBar>
    </NavHeader>
  );
}

Header.propTypes = {
  handleSidebarExpansion: PropTypes.func.isRequired,
  sidebarExpanded: PropTypes.bool.isRequired,
  handleLoggedIn: PropTypes.func.isRequired,
};
