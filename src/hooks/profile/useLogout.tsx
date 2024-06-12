import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";

export default function useLogout() {
  const logout = useCallback(async () => {
    const res = await API.get(URLs.profile.logout);
    return res;
  }, []);
  return logout;
}
