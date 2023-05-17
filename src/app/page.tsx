
import SideBar from "@/components/Sidebar";
import BottomBar from "../components/BottomBar";
import Content from "../components/Content";


export default function Home() {
  return (
<div className="main">
  
  <div className=" flex flex-row h-full ">
  <SideBar />
  <Content />
 
  </div>
  <div className=" flex flex-col justify-end">
    <BottomBar />
  </div>
</div>
  )
}
