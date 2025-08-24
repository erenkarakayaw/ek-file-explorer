import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import Navmenu from './Components/Navbar/Navmenu';
import Sidemenu from './Components/Sidemenu/Sidemenu';
import AppBrand from './Components/Navbar/AppBrand';
import BottomMenu from './Components/Bottommenu/BottomMenu';
import { useEffect, useState } from 'react';
import ContextMenu from './Components/FileExplorer-Content/ContentMenu';

export default function App() {
  const [sideMenuWidth, setsideMenuWidth] = useState(16.66);
  const [navMenuHeight, setnavMenuHeight] = useState(8.3);
  const [contentMenuWidth, setContentMenuWidth] = useState(83.34);
  //bottom-menu 4% çalıyor
  const [contentMenuHeight, setContentMenuHeight] = useState(86);

  useEffect(() => {
    setContentMenuWidth(100 - sideMenuWidth)
  }, [sideMenuWidth])

  return (
    <>
      <AppBrand />
      <Navmenu left={sideMenuWidth} top={navMenuHeight} />
      <Sidemenu
        widthPercent={sideMenuWidth}
        setWidthPercent={setsideMenuWidth}
      />

      <ContextMenu sideMenuWidth={sideMenuWidth} contentMenuHeight={contentMenuHeight} contentMenuWidth={contentMenuWidth} navMenuHeight={navMenuHeight}/>

      <BottomMenu />
    </>
  );
}
