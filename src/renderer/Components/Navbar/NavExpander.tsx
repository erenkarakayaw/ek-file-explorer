export default function NavExpander({ left, top, onMouseDown }) {
  return (
    <>
      <div
        style={{ width:`${100-left}%`,height: '2px', left: `${left}%`, top: `${top}%` }}
        className="w-full bg-neutral-400 z-10 absolute cursor-n-resize hover:bg-neutral-500"
      ></div>
    </>
  );
}
