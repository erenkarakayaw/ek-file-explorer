import { useEffect, useState } from 'react';
import FolderItem from './FolderItem';
import FileItem from './FileItem';

export default function ContextMenu({
  items: initialItems,
  setItems: setInitialItems,
  sideMenuWidth,
  contentMenuHeight,
  contentMenuWidth,
  navMenuHeight,
}) {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const loadDirectory = async () => {
      try {
        const currentPath = await window.electron.ipcRenderer.invoke(
          'get-current-directory',
        );
        const result = await window.electron.ipcRenderer.invoke(
          'scan-directory',
          currentPath,
        );
        setItems(result);
      } catch (error) {
        console.error('Error loading directory:', error);
      }
    };

    loadDirectory();
  }, []);

  const handleItemClick = (itemId) => {
    setItems(
      items.map((item) => ({
        ...item,
        selected: item.id === itemId ? !item.selected : false,
      })),
    );
  };

  return (
    <div
      style={{
        left: `${sideMenuWidth + 1}%`,
        width: `${contentMenuWidth - 3}%`,
        top: `${navMenuHeight + 37}px`,
        height: `calc(100vh - ${navMenuHeight + 60}px)`,
        overflowY: 'auto',
        position: 'absolute',
      }}
      className="grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] auto-rows-[160px] gap-1 p-2 scrollbar-custom"
    >
      {items.map((item) =>
        item.type === 'folder' ? (
          <FolderItem
            key={item.id}
            selected={item.selected}
            name={item.name}
            onClick={() => handleItemClick(item.id)}
          />
        ) : (
          <FileItem
            key={item.id}
            selected={item.selected}
            name={item.name}
            extension={item.extension}
            onClick={() => handleItemClick(item.id)}
          />
        ),
      )}
    </div>
  );
}
