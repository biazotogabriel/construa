import { StyledInput } from './styled';
import PropTypes from 'prop-types';

export default function CommonInput({ isLoading, ...props }) {
  return (
    <StyledInput $isLoading={isLoading}>
      <input {...props} disabled={isLoading}></input>
    </StyledInput>
  );
}

CommonInput.propTypes = {
  isLoading: PropTypes.bool,
};
