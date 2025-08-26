import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import Navmenu from './Components/Navbar/Navmenu';
import Sidemenu from './Components/Sidemenu/Sidemenu';
import AppBrand from './Components/Sidemenu/AppBrand';
import BottomMenu from './Components/Bottommenu/BottomMenu';
import { useEffect, useState } from 'react';
import ContextMenu from './Components/FileExplorer-Content/ContentMenu';
import Titlebar from './Components/Titlebar';

export default function App() {
  const [sideMenuWidth, setsideMenuWidth] = useState(16.66);
  const [navMenuHeight, setnavMenuHeight] = useState(80);
  const [contentMenuWidth, setContentMenuWidth] = useState(83.34);
  //bottom-menu 4% çalıyor
  const [contentMenuHeight, setContentMenuHeight] = useState(86);
  const [items, setItems] = useState([
    { id: 1, type: 'folder', name: 'Documents', selected: false },
    {
      id: 2,
      type: 'file',
      name: 'mynotes',
      extension: 'txt',
      selected: false,
    },
    {
      id: 3,
      type: 'file',
      name: 'report',
      extension: 'pdf',
      selected: false,
    },
    { id: 4, type: 'folder', name: 'Pictures', selected: false },
    {
      id: 5,
      type: 'file',
      name: 'document',
      extension: 'docx',
      selected: false,
    },
  ]);
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
      <Titlebar />
      <AppBrand />
      <Navmenu left={sideMenuWidth} top={navMenuHeight} />
      <Sidemenu
        widthPercent={sideMenuWidth}
        setWidthPercent={setsideMenuWidth}
      />

      <ContextMenu
        items={items}
        setItems={setItems}
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
