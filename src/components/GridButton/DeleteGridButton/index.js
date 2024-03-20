import GridButton from '..';
import { MdDelete } from 'react-icons/md';

export default function DeleteGridButton(props) {
  return (
    <GridButton {...props}>
      <MdDelete />
    </GridButton>
  );
}
