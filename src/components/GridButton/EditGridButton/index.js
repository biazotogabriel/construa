import { MdEdit } from 'react-icons/md';
import GridButton from '..';

export default function EditGridButton(props) {
  return (
    <GridButton {...props}>
      <MdEdit />
    </GridButton>
  );
}
