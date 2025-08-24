import NavCurrentDirSection from "./NavCurrentDirSection";
import NavViewSection from "./NavViewSection";

export default function Navmenu() {
  return (
    <nav className="absolute left-0 w-full text-white h-20 bg-white border-2 border-neutral-400">
      <div className="flex" style={{marginLeft: "16.6%"}}>
        <NavCurrentDirSection currentFolder={"Desktop"}/>
        <NavViewSection />
      </div>
    </nav>
  );
}
