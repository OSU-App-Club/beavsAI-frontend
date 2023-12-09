import Skeleton from "react-loading-skeleton";
import SidebarHeader from "./Header";

export default function SidebarSkeleton() {
  return (
    <div className="sidebar flex flex-col items-center h-screen border-r-2 border-gray-400 bg-gray-200">
      <SidebarHeader />
      <div className="p-4">
        <Skeleton width={100} height={20} />
        <Skeleton circle={true} height={50} width={50} className="mt-2" />
      </div>
    </div>
  );
}
