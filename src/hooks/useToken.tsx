import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { TokenState, useTokenStore } from "../lib/zustand";

const useToken = () => {
  const { getToken } = useAuth();
  const setToken = useTokenStore.setState;

  useEffect(() => {
    const fetchToken = async () => {
      const userToken = await getToken();
      if (!userToken) {
        throw new Error("Failed to get token");
      } else {
        const token: TokenState = {
          token: userToken,
        };
        setToken(token);
      }
    };

    fetchToken();
  }, [getToken, setToken]);
};

export default useToken;
