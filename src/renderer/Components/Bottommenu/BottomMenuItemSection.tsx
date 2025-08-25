export default function BottomMenuItemSection({
  currentDirectoryItems,
  currentDirectoryItemSize,
}) {
  return (
    <div
      style={{ height: '4%' }}
      className="fixed left-0 gap-2 flex w-full items-center justify-center"
    >
      <p>{currentDirectoryItems} Items</p>
      <div className="w-0.5 h-4 bg-neutral-500/60"></div>
      <p>{currentDirectoryItemSize}</p>
    </div>
  );
}
