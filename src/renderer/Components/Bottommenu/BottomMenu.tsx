import BottomMenuItemSection from './BottomMenuItemSection';
import BottomMenuPath from './BottomMenuPath';
import BottomMenuZoomSection from './BottomMenuZoomSection';

export default function BottomMenu() {
  return (
    <>
      <footer
        style={{ backgroundColor: 'rgb(191, 191, 191)', height: "4%" }}
        className="fixed flex items-center bottom-0 left-0 w-full z-10 border-neutral-400 border-2"
      >
        <BottomMenuPath />
        <BottomMenuItemSection />
        <BottomMenuZoomSection zoomMode={0} />
      </footer>
    </>
  );
}
