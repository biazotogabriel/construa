import { MdEdit } from 'react-icons/md';
import GridButton from '..';

export default function EditIconButton(props) {
  return (
    <GridButton {...props}>
      <MdEdit />
    </GridButton>
  );
}
