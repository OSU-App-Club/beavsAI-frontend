import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useTokenStore } from "../lib/zustand";

const useToken = () => {
  const { getToken } = useAuth();
  const { setToken } = useTokenStore();

  useEffect(() => {
    const fetchToken = async () => {
      const userToken = await getToken();
      setToken(userToken);
    };

    fetchToken();
  }, [getToken, setToken]);
};

export default useToken;
