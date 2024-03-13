import { FaHouseUser } from 'react-icons/fa';
import { FaHammer } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';

export const sideBarItems = [
  { title: 'Inicio', icon: <FaHouseUser />, link: 'route' },
  { title: 'Compras', icon: <FaShoppingBag />, link: 'route' },
  { title: 'Estoque', icon: <FaWarehouse />, link: 'route' },
  { title: 'Obras', icon: <FaHammer />, link: 'route' },
  { title: 'Financeiro', icon: <FaMoneyBill />, link: 'route' },
];
