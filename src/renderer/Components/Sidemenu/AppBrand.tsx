import { PiFolderSimpleStarFill } from 'react-icons/pi';
export default function AppBrand() {
  return (
    <>
      <div className="fixed max-lg:gap-0 top-12 left-4 z-10 gap-3 max-xl:gap-2 items-center inline-flex">
        <span className="text-blue-500 max-2xl:hidden">
          <PiFolderSimpleStarFill size={37} />
        </span>
        <span className="text-blue-500 max-2xl:block max-xl:hidden hidden">
          <PiFolderSimpleStarFill size={30} />
        </span>
        <span className="text-blue-500 max-xl:block max-lg:hidden hidden">
          <PiFolderSimpleStarFill size={25} />
        </span>
        <span className="text-blue-500 max-lg:block hidden">
          <PiFolderSimpleStarFill size={16} />
        </span>
        <h1 className="inline-block text-blue-500 max-md:hidden max-xl:text-sm max-2xl:text-xl text-2xl font-bold freckle-face-regular">
          EK File Explorer
        </h1>
      </div>
    </>
  );
}
