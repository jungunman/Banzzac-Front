import API from "@api/api";
import URLs from "@api/urls";
import { Friend } from "@models/friends";
import { favoriteFriendListState } from "@recoil/friends";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function useFavoriteFriendList(id: string, enable: boolean) {
  const [data, setData] = useRecoilState(favoriteFriendListState);

  const fetchFavoriteFriendList = useCallback(async () => {
    const res: Friend[] = await API.get(URLs.friends.fetchFavoriteFriendList);
    setData(res);
  }, []);

  const refetch = useCallback(() => {
    fetchFavoriteFriendList();
  }, []);

  useEffect(() => {
    enable && fetchFavoriteFriendList();
  }, [enable]);

  return { data, refetch };
}
