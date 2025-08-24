import { CiDesktop } from "react-icons/ci";
import { IoDocumentOutline } from "react-icons/io5";
import SideMenuButton from "./SidemenuButton";
import { MdOutlineDownload } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { LiaPhotoVideoSolid } from "react-icons/lia";

export default function Sidemenu() {
  return (
    <div style={{}} className="absolute top-0 w-1/6 left-0 h-full border-2 border-neutral-400 bg-gray-300">
      <p className="text-lg text-neutral-400 font-bold ml-5 max-sm:ml-2 max-sm:truncate mt-20">Locations</p>
      <ul className="ml-5 mt-1 text-lg">
        <li>
          <SideMenuButton selected={true} icon={<CiDesktop color="" size={25} />} title={"Desktop"} />
          <SideMenuButton selected={false} icon={<IoDocumentOutline color="" size={25} />} title={"Documents"}/>
          <SideMenuButton selected={false} icon={<MdOutlineDownload color="" size={25} />} title={"Downloads"}/>
          <SideMenuButton selected={false} icon={<IoMusicalNotesOutline color="" size={25} />} title={"Music"}/>
          <SideMenuButton selected={false} icon={<AiOutlinePicture color="" size={25} />} title={"Pictures"}/>
          <SideMenuButton selected={false} icon={<LiaPhotoVideoSolid color="" size={25} />} title={"Videos"}/>
        </li>
      </ul>
    </div>
  );
}
