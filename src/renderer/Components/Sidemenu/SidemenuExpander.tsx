export default function SidemenuExpander({left, onMouseDown}) {
  return <>
    <div onMouseDown={onMouseDown} className="z-10 cursor-e-resize hover:bg-neutral-500 h-full fixed top-0 bg-neutral-400" style={{width: "2px", left: `${left}%`}}></div>
  </>
}
