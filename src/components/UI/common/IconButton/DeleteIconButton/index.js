import GridButton from '..';
import { MdDelete } from 'react-icons/md';

export default function DeleteIconButton(props) {
  return (
    <GridButton {...props}>
      <MdDelete />
    </GridButton>
  );
}
