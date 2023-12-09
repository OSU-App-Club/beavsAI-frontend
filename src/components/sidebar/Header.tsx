import { useNavigate } from "react-router";
import g10 from "../../assets/g10.svg";

export default function SidebarHeader() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center w-full border-b-4 border-slate-300 dark:border-white shadow-md p-4 my-4">
        <h1 className="text-4xl text-orange-600 font-semibold">
          Beavs<span className="text-black dark:text-white">AI</span>
        </h1>
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={g10}
            alt="Logo"
            className="w-20 h-fit hover:animate-pulse"
          />
        </div>
      </div>
    </>
  );
}
