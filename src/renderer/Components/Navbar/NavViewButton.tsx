export default function NavViewButton({icon, onClick, selected}) {

  const selectedBg = selected ? "bg-gray-200/80" : "";

  return (
    <>
      <button className={`hover:bg-gray-200/80 w-16 h-12 rounded-2xl px-3 py-1 inline-flex justify-center items-center ${selectedBg}`}>
        <span className="text-neutral-600">{icon}</span>
      </button>
    </>
  );
}
