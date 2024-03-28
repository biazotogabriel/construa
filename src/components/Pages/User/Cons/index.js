import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Conteiner } from './styled';
import { useEffect, useState } from 'react';
import UserCad from '../Cad';
import Loading from '../../../Loading';
import CommonButton from '../../../UI/common/Button';
import { toast } from 'react-toastify';
import UserDeleteDialog from '../DeleteDialog';
import EditIconButton from '../../../UI/common/IconButton/EditIconButton';
import DeleteIconButton from '../../../UI/common/IconButton/DeleteIconButton';
import { getUsers } from '../../../../controllers/user';

export default function UserCons() {
  const [users, setUsers] = useState([]);
  const [showUserCad, setShowUserCad] = useState(false);
  const [showUserDeleteDialog, setShowUserDeleteDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userHandled, setUserHandled] = useState({});

  const columns = [
    { field: 'userId', headerName: 'Id', width: 90 },
    {
      field: 'userName',
      headerName: 'Nome de Usuário',
      width: 150,
    },
    {
      field: 'firstName',
      headerName: 'Primeiro Nome',
      width: 150,
    },
    {
      field: 'lastName',
      headerName: 'Último Nome',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <EditIconButton onClick={() => handleEditUserButtonClick(params.row)} />
          <DeleteIconButton onClick={() => handleDeleteUserButtonClick(params.row)} />
        </>
      ),
    },
  ];

  const getData = async () => {
    try {
      setIsLoading(true);
      const rawUsers = await getUsers();
      const users = rawUsers.map((obj) => {
        return { ...obj, id: obj.userId };
      });
      setUsers(users);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error('Erro ao buscar dados');
    }
  };

  useEffect(() => {
    getData();
  }, [setUsers]);

  const closeUserCad = async (updateData = false) => {
    setUserHandled({});
    setShowUserCad(false);
    if (updateData) await getData();
  };

  const closeUserDeleteDialog = async (updateData = false) => {
    setUserHandled({});
    setShowUserDeleteDialog(false);
    if (updateData) await getData();
  };

  const handleNewUserButtonClick = () => {
    setUserHandled({});
    setShowUserCad(true);
  };

  const handleEditUserButtonClick = (user) => {
    setUserHandled(user);
    setShowUserCad(true);
  };

  const handleDeleteUserButtonClick = (user) => {
    setUserHandled(user);
    setShowUserDeleteDialog(true);
  };

  return (
    <>
      {showUserCad && <UserCad user={userHandled} onClose={closeUserCad} />}
      {showUserDeleteDialog && <UserDeleteDialog user={userHandled} onClose={closeUserDeleteDialog} />}
      {isLoading && <Loading />}
      <Conteiner>
        <div className="headerConteiner">
          <h1>USUÁRIOS</h1>
          <CommonButton onClick={handleNewUserButtonClick}>Novo</CommonButton>
        </div>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            columns: {
              columnVisibilityModel: {
                userId: false,
              },
            },
          }}
          autoPageSize
          slots={{ toolbar: GridToolbarQuickFilter }}
        />
      </Conteiner>
    </>
  );
}
