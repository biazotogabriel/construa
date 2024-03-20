import PropTypes from 'prop-types';
import { Button } from './styled';

export default function GridButton(props) {
  return (
    <>
      <Button {...props}></Button>
    </>
  );
}

GridButton.propTypes = {
  children: PropTypes.element,
};
