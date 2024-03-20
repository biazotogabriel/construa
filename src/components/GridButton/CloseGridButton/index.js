import { IoCloseCircleSharp } from 'react-icons/io5';
import GridButton from '..';

export default function CloseGridButton(props) {
  return (
    <GridButton {...props}>
      <IoCloseCircleSharp />
    </GridButton>
  );
}
