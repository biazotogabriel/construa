import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Conteiner } from './styled';
import { useEffect, useState } from 'react';
import LegalEntityCad from '../Cad';
import Loading from '../../../Loading';
import CommonButton from '../../../UI/common/Button';
import { toast } from 'react-toastify';
import EditIconButton from '../../../UI/common/IconButton/EditIconButton';
import DeleteIconButton from '../../../UI/common/IconButton/DeleteIconButton';
import LegalEntityDeleteDialog from '../DeleteDialog';
import { getLegalEntities } from '../../../../controllers/legalEntity';

export default function LegalEntityCons() {
  const [legalEntities, setLegalEntities] = useState([]);
  const [ShowLegalEntityCad, setShowLegalEntityCad] = useState(false);
  const [showLegalEntityDeleteDialog, setShowLegalEntityDeleteDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [legalEntityHandled, setLegalEntityHandled] = useState({});

  const columns = [
    { field: 'legalEntityId', headerName: 'Id', width: 90 },
    {
      field: 'document',
      headerName: 'CPNJ',
      width: 150,
    },
    {
      field: 'companyName',
      headerName: 'Razão Social',
      width: 150,
    },
    {
      field: 'commercialName',
      headerName: 'Nome Fantasia',
      width: 150,
    },
    {
      field: 'addressZipCode',
      headerName: 'CEP',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <EditIconButton onClick={() => handleEditLegalEntityButtonClick(params.row)} />
          <DeleteIconButton onClick={() => handleDeleteLegalEntityButtonClick(params.row)} />
        </>
      ),
    },
  ];

  const getData = async () => {
    try {
      setIsLoading(true);
      const rawLegalEntities = await getLegalEntities();
      const legalEntities = rawLegalEntities.map((obj) => {
        return { ...obj, id: obj.legalEntityId };
      });
      console.log(legalEntities);
      setLegalEntities(legalEntities);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error('Erro ao buscar dados');
    }
  };

  useEffect(() => {
    getData();
  }, [setLegalEntities]);

  const closeLegalEntityCad = async (updateData = false) => {
    setLegalEntityHandled({});
    setShowLegalEntityCad(false);
    if (updateData) await getData();
  };

  const closeLegalEntityDeleteDialog = async (updateData = false) => {
    setLegalEntityHandled({});
    setShowLegalEntityDeleteDialog(false);
    if (updateData) await getData();
  };

  const handleNewLegalEntityButtonClick = () => {
    setLegalEntityHandled({});
    setShowLegalEntityCad(true);
  };

  const handleEditLegalEntityButtonClick = (legalEntity) => {
    setLegalEntityHandled(legalEntity);
    setShowLegalEntityCad(true);
  };

  const handleDeleteLegalEntityButtonClick = (legalEntity) => {
    setLegalEntityHandled(legalEntity);
    setShowLegalEntityDeleteDialog(true);
  };

  return (
    <>
      {ShowLegalEntityCad && <LegalEntityCad legalEntity={legalEntityHandled} onClose={closeLegalEntityCad} />}
      {showLegalEntityDeleteDialog && (
        <LegalEntityDeleteDialog legalEntity={legalEntityHandled} onClose={closeLegalEntityDeleteDialog} />
      )}
      {isLoading && <Loading />}
      <Conteiner>
        <div className="headerConteiner">
          <h1>PESSOAS JURÍDICAS</h1>
          <CommonButton onClick={handleNewLegalEntityButtonClick}>Novo</CommonButton>
        </div>
        <DataGrid
          rows={legalEntities}
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
