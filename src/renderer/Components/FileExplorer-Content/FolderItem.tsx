import folderIcon from '../../assets/macos-folder-original.svg';

export default function FolderItem({ selected, name, onClick }) {
  const bgClass = selected ? "bg-blue-300" : "";

  return (
    <>
      <button onClick={() => onClick(!selected)} className={"group cursor-default min-w-32 h-32 inline-flex flex-col items-center " + bgClass} >
        <img src={folderIcon} className="h-24 pointer-events-none"></img>
        <p className="text-neutral-600 text-lg truncate">{name}</p>
      </button>
    </>
  );
}
