import { useEffect } from 'react';
import Input from '../Input';
import { StyledLabel } from './styled';
import PropTypes from 'prop-types';

export default function CommonLabeledInput({ label, isLoading, ...props }) {
  useEffect(() => {});
  return (
    <StyledLabel $isLoading={isLoading}>
      <span>{label}</span>
      <Input {...props} isLoading={isLoading} />
    </StyledLabel>
  );
}

CommonLabeledInput.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
};
