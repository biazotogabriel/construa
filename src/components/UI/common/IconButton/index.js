import PropTypes from 'prop-types';
import { Button } from './styled';

export default function IconButton(props) {
  return (
    <>
      <Button {...props}></Button>
    </>
  );
}

IconButton.propTypes = {
  children: PropTypes.element,
};
