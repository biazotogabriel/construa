import ProptTypes from 'prop-types';
import { StyledForm } from './styled';

export default function CommonForm({ children }) {
  return <StyledForm>{children}</StyledForm>;
}

CommonForm.propTypes = {
  children: ProptTypes.oneOfType[(ProptTypes.element, ProptTypes.array)],
};
