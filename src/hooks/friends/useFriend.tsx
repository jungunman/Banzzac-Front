import API from "@api/api";
import URLs from "@api/urls";
import { FriendDetail } from "@models/friends";
import { useCallback, useEffect, useState } from "react";

export default function useFriend(friendId: string) {
  const [data, setData] = useState<FriendDetail>();

  const fetchFriendDetail = useCallback(async () => {
    const res: FriendDetail = await API.get(
      URLs.friends.fetchFriendDetail(friendId),
    );
    setData(res);
  }, []);

  useEffect(() => {
    fetchFriendDetail();
  }, []);

  return { data };
}
