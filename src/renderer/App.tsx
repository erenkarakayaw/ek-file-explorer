import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import Navmenu from './Components/Navbar/Navmenu';
import Sidemenu from './Components/Sidemenu/Sidemenu';
import AppBrand from './Components/Navbar/AppBrand';
import BottomMenu from './Components/Bottommenu/BottomMenu';

export default function App() {

  return (
    <>
      <AppBrand />
      <Navmenu />
      <Sidemenu />
      <BottomMenu />
    </>
  );
}
