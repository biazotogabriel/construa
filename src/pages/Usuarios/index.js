import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Conteiner } from './styled';
import axios from '../../services/axios';
import { useEffect, useState } from 'react';
import { GridButton } from '../../components/GridButton';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import UserCad from '../../components/UserCad';
import Loading from '../../components/Loading';
import { CommonButton } from '../../components/CommonButton';

export default function User() {
  const [users, setUsers] = useState([]);
  const [showUserCad, setShowUserCad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userIdEditing, setUserIdEditing] = useState(-1);

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
          <GridButton onClick={() => handleEditUserButton(params.row.userId)}>
            <MdEdit />
          </GridButton>
          <GridButton onClick={() => handleDeleteUserButton(params.row.userId)}>
            <MdDelete />
          </GridButton>
        </>
      ),
    },
  ];

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/users');
      const data = response.data.map((obj) => {
        return { ...obj, id: obj.userId };
      });
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [setUsers]);

  const openUserCadPage = (userId) => {
    setShowUserCad(true);
    setUserIdEditing(userId);
  };

  const closeUserCadPage = async (updateData = true) => {
    setShowUserCad(false);
    setUserIdEditing(-1);
    if (updateData) await getData();
  };

  const handleNewUserButton = () => {
    openUserCadPage(-1);
  };

  const handleEditUserButton = (userId) => {
    openUserCadPage(userId);
  };

  const handleDeleteUserButton = (userId) => {
    console.log('Deleta ', userId);
  };

  return (
    <Conteiner>
      <div className="headerConteiner">
        <h1>USUÁRIOS</h1>
        <CommonButton onClick={handleNewUserButton}>Novo</CommonButton>
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
      {showUserCad && (
        <UserCad close={closeUserCadPage} userId={userIdEditing} />
      )}
      {isLoading && <Loading />}
    </Conteiner>
  );
}
