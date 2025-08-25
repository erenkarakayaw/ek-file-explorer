import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import Navmenu from './Components/Navbar/Navmenu';
import Sidemenu from './Components/Sidemenu/Sidemenu';
import AppBrand from './Components/Sidemenu/AppBrand';
import BottomMenu from './Components/Bottommenu/BottomMenu';
import { useEffect, useState } from 'react';
import ContextMenu from './Components/FileExplorer-Content/ContentMenu';

export default function App() {
  const [sideMenuWidth, setsideMenuWidth] = useState(16.66);
  const [navMenuHeight, setnavMenuHeight] = useState(80);
  const [contentMenuWidth, setContentMenuWidth] = useState(83.34);
  //bottom-menu 4% çalıyor
  const [contentMenuHeight, setContentMenuHeight] = useState(86);

  const [currentDirectory, setCurrentDirectory] = useState(
    'C:/Users/erenk/Desktop',
  );

  const [currentDirectoryItems, setCurrentDirectoryItems] = useState(10);
  const [currentDirectoryItemSize, setCurrentDirectoryItemSize] =
    useState('1.8 GB');

  useEffect(() => {
    setContentMenuWidth(100 - sideMenuWidth);
  }, [sideMenuWidth]);

  return (
    <>
      <AppBrand />
      <Navmenu left={sideMenuWidth} top={navMenuHeight} />
      <Sidemenu
        widthPercent={sideMenuWidth}
        setWidthPercent={setsideMenuWidth}
      />

      <ContextMenu
        sideMenuWidth={sideMenuWidth}
        contentMenuHeight={contentMenuHeight}
        contentMenuWidth={contentMenuWidth}
        navMenuHeight={navMenuHeight}
      />

      <BottomMenu
        currentDirectory={currentDirectory}
        currentDirectoryItemSize={currentDirectoryItemSize}
        currentDirectoryItems={currentDirectoryItems}
      />
    </>
  );
}
