import { PiSquaresFour } from 'react-icons/pi';
import { IoIosList } from 'react-icons/io';
import NavViewButton from './NavViewButton';
import { IoIosResize } from 'react-icons/io';
import { MdOutlineViewInAr } from 'react-icons/md';

export default function NavViewSection() {
  return (
    <>
      <div
        className="flex items-center h-20 gap-2"
        style={{ marginLeft: '10%' }}
      >
        <NavViewButton
          onClick={() => {}}
          selected={true}
          icon={<PiSquaresFour size={40} />}
        />
        <NavViewButton
          onClick={() => {}}
          selected={false}
          icon={<IoIosList size={40} />}
        />
        <div className="h-10 w-0.5 bg-neutral-200 mx-2"></div>
        <NavViewButton
          onClick={() => {}}
          selected={false}
          icon={<span className="text-xl text-neutral-600">.sm</span>}
        />
        <NavViewButton
          onClick={() => {}}
          selected={true}
          icon={<span className="text-xl text-neutral-600">.md</span>}
        />
        <NavViewButton
          onClick={() => {}}
          selected={false}
          icon={<span className="text-xl text-neutral-600">.lg</span>}
        />
      </div>
    </>
  );
}
