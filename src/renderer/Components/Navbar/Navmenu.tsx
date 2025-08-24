import NavCurrentDirSection from './NavCurrentDirSection';
import NavExpander from './NavExpander';
import NavViewSection from './NavViewSection';

export default function Navmenu({ left, top }) {
  return (
    <>
    <NavExpander left={left} top={top} onMouseDown={() => {}}/>
      <nav
        style={{ width: `${100 - left}%`, left: `${left}%`, height: `${top}%` }}
        className="absolute text-white bg-white border-l-2 border-t-2 border-r-2 border-neutral-400"
      >
        <div className="flex" style={{}}>
          <NavCurrentDirSection currentFolder={'Desktop'} />
          <NavViewSection />
        </div>
      </nav>
    </>
  );
}
