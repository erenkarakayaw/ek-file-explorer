import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import Navmenu from './Components/Navbar/Navmenu';
import Sidemenu from './Components/Sidemenu/Sidemenu';
import AppBrand from './Components/Navbar/AppBrand';
import BottomMenu from './Components/Bottommenu/BottomMenu';
import { useState } from 'react';

export default function App() {

  const [sideMenuWidth, setsideMenuWidth] = useState(16.66);
  const [navMenuHeight, setnavMenuHeight] = useState(8.3)

  return (
    <>
      <AppBrand />
      <Navmenu left={sideMenuWidth} top={navMenuHeight}  />
      <Sidemenu widthPercent={sideMenuWidth} setWidthPercent={setsideMenuWidth} />
      <BottomMenu />
    </>
  );
}
