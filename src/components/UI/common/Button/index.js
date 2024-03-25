import PropTypes from 'prop-types';
import { StyledButton } from './styled';

export default function CommonButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

CommonButton.propTypes = {
  children: PropTypes.string,
};
