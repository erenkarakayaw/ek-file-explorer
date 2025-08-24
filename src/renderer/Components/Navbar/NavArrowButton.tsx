export default function NavArrowButton({ icon, onClick, disabled }) {
  if (disabled)
    return (
      <button
        disabled
        className="disabled:cursor-default p-1 ml-1  cursor-pointer inline-flex items-center justify-center text-neutral-500 hover:text-neutral-800 disabled:text-neutral-400 disabled:hover:text-neutral-400"
      >
        {icon}
      </button>
    );
  return (
    <>
      <button className="disabled:cursor-default p-1 ml-1  cursor-pointer inline-flex items-center justify-center text-neutral-500 hover:text-neutral-800 disabled:text-neutral-400 disabled:hover:text-neutral-400">
        {icon}
      </button>
    </>
  );
}
