import { MainConteiner } from './styled';
import PropTypes from 'prop-types';

export default function Main({ children }) {
  return <MainConteiner>{children}</MainConteiner>;
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
