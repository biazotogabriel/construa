import PropTypes from 'prop-types';
import { StyledButton } from './styled';

export default function CommonButton({ children, isLoading, ...props }) {
  return (
    <StyledButton $isLoading={isLoading} {...props}>
      {children}
    </StyledButton>
  );
}

CommonButton.propTypes = {
  children: PropTypes.string,
  isLoading: PropTypes.bool,
};
