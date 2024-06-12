import API from "@api/api";
import URLs from "@api/urls";
import { Friend } from "@models/friends";
import { friendListState } from "@recoil/friends";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useFriendList(id: string, enable: boolean) {
  const [data, setData] = useRecoilState(friendListState);

  const fetchFriendList = useCallback(async () => {
    const res: Friend[] = await API.get(URLs.friends.fetchFriendList);
    setData(res);
  }, []);

  const refetch = useCallback(() => {
    fetchFriendList();
  }, []);

  useEffect(() => {
    enable && fetchFriendList();
  }, [enable]);

  return { data, refetch };
}
