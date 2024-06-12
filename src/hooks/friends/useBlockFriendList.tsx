import API from "@api/api";
import URLs from "@api/urls";
import { Friend } from "@models/friends";
import { blockedFriendListState } from "@recoil/friends";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useBlockFriendList(id: string) {
  const [data, setData] = useRecoilState(blockedFriendListState);

  const fetchBlockFriendList = useCallback(async () => {
    const res: Friend[] = await API.get(URLs.friends.fetchBlockFriendList);
    setData(res);
  }, []);

  useEffect(() => {
    fetchBlockFriendList();
  }, []);

  return { data };
}
