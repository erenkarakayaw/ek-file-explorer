import folderIcon from '../../assets/macos-folder-original.svg';

export default function FolderItem({ selected, name, onClick }) {
  const bgClass = selected ? 'bg-blue-500 text-white' : 'text-neutral-600';
  const nameClass = selected
    ? 'w-full break-words whitespace-normal'
    : 'w-full truncate';

  return (
    <button
      onClick={() => onClick(!selected)}
      className={`${bgClass} group cursor-default w-32 h-32 inline-flex flex-col items-center justify-between py-2 px-1`}
    >
      <img src={folderIcon} className="h-20 w-20 pointer-events-none"></img>
      <p className={`${nameClass} text-sm text-center leading-tight`}>{name}</p>
    </button>
  );
}
