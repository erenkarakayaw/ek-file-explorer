import { useEffect, useState } from 'react';
import FolderItem from './FolderItem';
import FileItem from './FileItem';

export default function ContextMenu({
  sideMenuWidth,
  contentMenuHeight,
  contentMenuWidth,
  navMenuHeight,
}) {
  const [selectedFolder, setSelectedFolder] = useState(false);
  const [selectedFile, setSelectedFile] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Example items - replace with your actual data
    const dummyItems = [
      { type: 'folder', name: 'Documents' },
      { type: 'file', name: 'mynotes', extension: 'txt' },
      { type: 'file', name: 'report', extension: 'pdf' },
      { type: 'folder', name: 'Pictures' },
      { type: 'file', name: 'document', extension: 'docx' },
    ];
    setItems(dummyItems);
  }, []);

  return (
    <>
      <div
        style={{
          left: `${sideMenuWidth + 3}%`,
          width: `${contentMenuWidth - 3}%`,
          top: `${navMenuHeight + 5}px`,
          height: `calc(100vh - ${navMenuHeight + 60}px)`,
          overflowY: 'auto',
          position: 'absolute',
        }}
        className="flex gap-1 flex-wrap p-2 scrollbar-custom"
      >
        {items.map((item, index) =>
          item.type === 'folder' ? (
            <FolderItem
              key={index}
              selected={selectedFolder}
              name={item.name}
              onClick={setSelectedFolder}
            />
          ) : (
            <FileItem
              key={index}
              selected={selectedFile}
              name={item.name}
              extension={item.extension}
              onClick={setSelectedFile}
            />
          ),
        )}
      </div>
    </>
  );
}
