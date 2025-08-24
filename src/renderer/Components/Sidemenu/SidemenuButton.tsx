export default function SideMenuButton({icon, title, selected}) {
  const selectedBg = selected ? "bg-gray-400/35" : "";

  return (
    <>
      <button className={"rounded-xl max-md:justify-center py-2 w-11/12 h-10 inline-flex items-center gap-2 hover:bg-gray-400/35 " + selectedBg}>
        <span className="text-blue-400 ml-2 max-md:ml-0">
          {icon}
        </span>
        <span className="max-lg:text-sm max-lg:truncate text-lg max-md:hidden">{title}</span>
      </button>
    </>
  );
}
