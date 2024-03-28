import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import get from 'lodash/get';

import { Container } from './styled';
import LabeledInput from '../../../UI/common/LabeledInput';
import CommonButton from '../../../UI/common/Button';
import Modal from '../../../UI/Modal';
import { createLegalEntity, getLegalEntity, updateLegalEntity } from '../../../../controllers/legalEntity';

export default function LegalEntityCad({ legalEntity = {}, onClose }) {
  const legalEntityId = get(legalEntity, 'legalEntityId', -1);
  const [isLoading, setIsLoading] = useState(legalEntityId !== -1);
  const [isSaving, setIsSaving] = useState(false);
  const [document, setDocument] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [commercialName, setCommercialName] = useState('');
  const [addressZipCode, setAddressZipCode] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [addressNeighborhood, setAddressNeighborhood] = useState('');
  const [addressComplement, setAddressComplement] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  useEffect(() => {
    const getData = async () => {
      const legalEntity = await getLegalEntity(legalEntityId);
      if (!legalEntity) return onClose();
      setDocument(legalEntity.document);
      setCompanyName(legalEntity.companyName);
      setCommercialName(legalEntity.commercialName);
      setAddressZipCode(legalEntity.addressZipCode);
      setAddressStreet(legalEntity.addressStreet);
      setAddressNumber(legalEntity.addressNumber);
      setAddressNeighborhood(legalEntity.addressNeighborhood);
      setAddressComplement(legalEntity.addressComplement);
      setCity(legalEntity.city);
      setUf(legalEntity.uf);
      setIsLoading(false);
    };
    if (legalEntityId > -1) getData();
  }, [setDocument, setCompanyName, setCommercialName, legalEntityId, onClose, isLoading]);

  const handleSaveButtonClick = async () => {
    setIsSaving(true);
    if (
      legalEntityId === -1
        ? await createLegalEntity({
            document,
            companyName,
            commercialName,
            addressZipCode,
            addressStreet,
            addressNumber,
            addressNeighborhood,
            addressComplement,
            city,
            uf,
          })
        : await updateLegalEntity({
            legalEntityId,
            document,
            companyName,
            commercialName,
            addressZipCode,
            addressStreet,
            addressNumber,
            addressNeighborhood,
            addressComplement,
            city,
            uf,
          })
    ) {
      onClose(true);
    }
    setIsSaving(false);
  };

  return (
    <Modal title="Cadastro de Pessoa Jurídica" onClose={() => onClose(false)}>
      <Container>
        <LabeledInput
          label="CNPJ"
          type="text"
          value={document}
          name="document"
          isLoading={isLoading}
          onChange={(e) => setDocument(e.target.value)}
        />
        <LabeledInput
          label="Razão Social"
          type="text"
          value={companyName}
          name="companyName"
          isLoading={isLoading}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <LabeledInput
          label="Nome Fantasia"
          type="text"
          value={commercialName}
          name="commercialName"
          isLoading={isLoading}
          onChange={(e) => setCommercialName(e.target.value)}
        />
        <LabeledInput
          label="CEP"
          type="text"
          value={addressZipCode}
          isLoading={isLoading}
          name="addressZipCode"
          onChange={(e) => setAddressZipCode(e.target.value)}
        />
        <LabeledInput
          label="Rua"
          type="text"
          value={addressStreet}
          name="addressStreet"
          isLoading={isLoading}
          onChange={(e) => setAddressStreet(e.target.value)}
        />
        <LabeledInput
          label="Número"
          type="text"
          value={addressNumber}
          name="addressNumber"
          isLoading={isLoading}
          onChange={(e) => setAddressNumber(e.target.value)}
        />
        <LabeledInput
          label="Bairro"
          type="text"
          value={addressNeighborhood}
          name="addressNeighborhood"
          isLoading={isLoading}
          onChange={(e) => setAddressNeighborhood(e.target.value)}
        />
        <LabeledInput
          label="Complemento"
          type="text"
          value={addressComplement}
          name="addressComplement"
          isLoading={isLoading}
          onChange={(e) => setAddressComplement(e.target.value)}
        />
        <LabeledInput
          label="Cidade"
          type="text"
          value={city}
          name="city"
          isLoading={isLoading}
          onChange={(e) => setCity(e.target.value)}
        />
        <LabeledInput
          label="Estado"
          type="text"
          value={uf}
          name="uf"
          isLoading={isLoading}
          onChange={(e) => setUf(e.target.value)}
        />
        <CommonButton onClick={handleSaveButtonClick} isLoading={isLoading} disabled={isLoading}>
          {isSaving ? 'Salvando' : 'Salvar'}
        </CommonButton>
      </Container>
    </Modal>
  );
}

LegalEntityCad.propTypes = {
  onClose: PropTypes.func.isRequired,
  legalEntity: PropTypes.object.isRequired,
};
