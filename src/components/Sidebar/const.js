import { FaHouseUser } from 'react-icons/fa';
import { FaHammer } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { LiaUserTieSolid } from 'react-icons/lia';

export const sideBarItems = [
  { title: 'Inicio', icon: <FaHouseUser />, link: 'inicio' },
  { title: 'Compras', icon: <FaShoppingBag />, link: 'compras' },
  { title: 'Estoque', icon: <FaWarehouse />, link: 'estoque' },
  { title: 'Obras', icon: <FaHammer />, link: 'obras' },
  { title: 'Financeiro', icon: <FaMoneyBill />, link: 'financeiro' },
  { title: 'Usuários', icon: <FaUser />, link: 'users' },
  { title: 'Pessoas Jurídicas', icon: <LiaUserTieSolid />, link: 'legalEntities' },
];
