export default function Titlebar() {
  return (
    <div className="titlebar h-8 bg-neutral-400">
      <div className="drag-region">
        <div className="window-controls">
          <button
            className="bg-red-500 duration-150 hover:bg-red-600 brightness-110 cursor-pointer w-4 h-4 rounded-full ml-2"
            id="close-button"
            title="Close"
            onClick={() => {
              window.api.close();
            }}
          ></button>
          <button
            className="
          bg-yellow-500 duration-150 hover:bg-yellow-600 brightness-110 cursor-pointer w-4 h-4 rounded-full ml-2"
            id="max-button"
            title="Maximize"
            onClick={() => {
              window.api.maximize();
            }}
          ></button>
          <button
            className="bg-green-500 duration-150 hover:bg-green-600 brightness-110 cursor-pointer w-4 h-4 rounded-full ml-2"
            id="min-button"
            title="Minimize"
            onClick={() => {
              window.api.minimize();
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}
