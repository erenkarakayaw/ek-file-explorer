import { CiDesktop } from 'react-icons/ci';
import { IoDocumentOutline } from 'react-icons/io5';
import SideMenuButton from './SidemenuButton';
import { MdOutlineDownload } from 'react-icons/md';
import { IoMusicalNotesOutline } from 'react-icons/io5';
import { AiOutlinePicture } from 'react-icons/ai';
import { LiaPhotoVideoSolid } from 'react-icons/lia';
import SidemenuExpander from './SidemenuExpander';
import { useState, useRef } from 'react';

export default function Sidemenu({ widthPercent, setWidthPercent }) {
  const sidemenuRef = useRef(null);

  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = 'ew-resize';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current || !sidemenuRef.current) return;

    const parentWidth = sidemenuRef.current.parentElement.offsetWidth;

    // Direkt mouse X pozisyonunu parent width'e çevir
    let newWidth = (e.clientX / parentWidth) * 100;

    if (newWidth < 16.66) newWidth = 16.66;
    if (newWidth > 33) newWidth = 33;

    setWidthPercent(newWidth);
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = 'default';
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <SidemenuExpander left={widthPercent} onMouseDown={handleMouseDown} />
      <div
        ref={sidemenuRef}
        style={{ width: `${widthPercent}%` }}
        className="fixed top-0 left-0 h-full border-t-2 border-b-2 border-l-2 border-neutral-400 bg-gray-300"
      >
        <p className="text-lg text-neutral-400 font-bold ml-5 max-sm:ml-2 max-sm:truncate mt-20">
          Locations
        </p>
        <ul className="ml-5 mt-1 text-lg">
          <li>
            <SideMenuButton
              selected={true}
              icon={<CiDesktop color="" size={25} />}
              title={'Desktop'}
            />
            <SideMenuButton
              selected={false}
              icon={<IoDocumentOutline color="" size={25} />}
              title={'Documents'}
            />
            <SideMenuButton
              selected={false}
              icon={<MdOutlineDownload color="" size={25} />}
              title={'Downloads'}
            />
            <SideMenuButton
              selected={false}
              icon={<IoMusicalNotesOutline color="" size={25} />}
              title={'Music'}
            />
            <SideMenuButton
              selected={false}
              icon={<AiOutlinePicture color="" size={25} />}
              title={'Pictures'}
            />
            <SideMenuButton
              selected={false}
              icon={<LiaPhotoVideoSolid color="" size={25} />}
              title={'Videos'}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
