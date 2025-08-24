import { useEffect, useState } from 'react';
import folderIcon from '../../assets/macos-folder-original.svg';
import FolderItem from './FolderItem';

export default function ContextMenu({
  sideMenuWidth,
  contentMenuHeight,
  contentMenuWidth,
  navMenuHeight,
}) {
  const [fs, setFs] = useState(false);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let ck = [];
    for (let i = 0; i < 80; i++) ck.push(i);
    setArr(ck);
  }, []);

  return (
    <>
      <div
        style={{
          left: `${sideMenuWidth + 5}%`,
          width: `${contentMenuWidth - 5}%`,
          top: `${navMenuHeight + 5}%`,
          height: `${contentMenuHeight - 5}%`,
        }}
        className="absolute flex gap-4 flex-wrap"
      >
        {arr.map((i) => (
          <FolderItem
            key={i}
            selected={fs}
            name={'Documents'}
            onClick={setFs}
          />
        ))}
      </div>
    </>
  );
}
