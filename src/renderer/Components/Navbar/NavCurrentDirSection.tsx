import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import NavArrowButton from './NavArrowButton';

export default function NavCurrentDirSection({ currentFolder }) {
  return (
    <>
      <div className="flex items-center h-20">
        <NavArrowButton disabled={false} icon={<IoIosArrowBack size={30} />} onClick={() => {}}/>
        <NavArrowButton disabled={true} icon={<IoIosArrowForward size={30} />} onClick={() => {}}/>

        <h2 className=" text-2xl font-bold text-neutral-600 ml-6">
          {currentFolder}
        </h2>
      </div>
    </>
  );
}
