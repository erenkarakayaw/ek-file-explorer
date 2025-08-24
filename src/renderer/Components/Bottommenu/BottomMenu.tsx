import BottomMenuItemSection from './BottomMenuItemSection';
import BottomMenuPath from './BottomMenuPath';
import BottomMenuZoomSection from './BottomMenuZoomSection';

export default function BottomMenu() {
  return (
    <>
      <footer
        style={{ backgroundColor: 'rgb(191, 191, 191)' }}
        className="absolute flex items-center bottom-0 left-0 w-full h-10 z-10 border-neutral-400 border-2"
      >
        <BottomMenuPath />
        <BottomMenuItemSection />
        <BottomMenuZoomSection zoomMode={0} />
      </footer>
    </>
  );
}
