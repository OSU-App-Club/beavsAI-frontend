import useToken from "../../hooks/useToken";
import { TokenState, useTokenStore } from "../../lib/zustand";
import { Sidebar } from "../sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useToken();
  const token = useTokenStore((state: TokenState) => state.token);
  return (
    token && (
      <div className="flex bg-gray-100 dark:bg-gray-900 h-screen">
        <Sidebar token={token} />
        <div className="flex-grow min-w-max w-full">{children}</div>
      </div>
    )
  );
};

export default Layout;
