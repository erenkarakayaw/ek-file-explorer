import { PiFolders } from 'react-icons/pi';

export default function BottomMenuPath() {
  return (
    <>
      <div className="ml-2 z-40 flex gap-2 items-center text-neutral-500 cursor-pointer hover:text-neutral-600">
        <PiFolders size={20} />
        <p className="text-lg font-bold">C:\Users\erenk\Desktop</p>
      </div>
    </>
  );
}
