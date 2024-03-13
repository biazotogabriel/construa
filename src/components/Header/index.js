import { NavHeader } from './styled';
import PropTypes from 'prop-types';

export default function Header({ handleSidebarExpansion }) {
  return (
    <NavHeader>
      <nav>
        <button onClick={handleSidebarExpansion}>Expands</button>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </nav>
    </NavHeader>
  );
}

Header.propTypes = {
  handleSidebarExpansion: PropTypes.func.isRequired,
};
