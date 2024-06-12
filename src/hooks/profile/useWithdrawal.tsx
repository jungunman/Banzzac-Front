import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";

export default function useWithdrawal() {
  const withdrawal = useCallback(async (pwd: string) => {
    const res = await API.post(URLs.profile.withdrawal, { pwd });
    return res;
  }, []);
  return { withdrawal };
}
