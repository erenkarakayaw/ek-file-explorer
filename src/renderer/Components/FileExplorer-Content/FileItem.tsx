import Icon from '../../assets/post-360412-0-09676400-1365986245.png';

export default function FileItem({ selected, name, extension, onClick }) {
  const bgClass = selected ? 'bg-blue-500 text-white' : 'text-neutral-600';

  return (
    <button
      onClick={() => onClick(!selected)}
      className={`${bgClass} group cursor-default min-w-32 h-32 inline-flex flex-col items-center justify-between py-2`}
    >
      <img src={Icon} className="h-20 pointer-events-none"></img>
      <p className="text-lg truncate w-full text-center px-2">
        {name}.{extension}
      </p>
    </button>
  );
}
