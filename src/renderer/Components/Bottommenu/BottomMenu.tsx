import BottomMenuItemSection from './BottomMenuItemSection';
import BottomMenuPath from './BottomMenuPath';
import BottomMenuZoomSection from './BottomMenuZoomSection';

export default function BottomMenu({
  currentDirectory,
  currentDirectoryItems,
  currentDirectoryItemSize,
}) {
  return (
    <>
      <footer
        style={{ backgroundColor: 'rgb(191, 191, 191)', height: '4%' }}
        className="fixed flex items-center bottom-0 left-0 w-full z-10 border-neutral-400 border-2"
      >
        <BottomMenuPath currentDirectory={currentDirectory} />
        <BottomMenuItemSection
          currentDirectoryItemSize={currentDirectoryItemSize}
          currentDirectoryItems={currentDirectoryItems}
        />
        <BottomMenuZoomSection zoomMode={0} />
      </footer>
    </>
  );
}
