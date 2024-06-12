import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";
import useFriendList from "./useFriendList";
import { TEST_EMAIL } from "@constants/index";
import useFavoriteFriendList from "./useFavoriteFriendList";

export default function useFavoriteFriend(id: string) {
  const { refetch: refetchFriendList } = useFriendList(TEST_EMAIL, false);
  const { refetch: refetchFavoriteFriendList } = useFavoriteFriendList(
    TEST_EMAIL,
    false,
  );

  const deleteFavoriteFriend = useCallback(async (friendId: string) => {
    await API.get(URLs.friends.deleteFavoriteFriend(friendId));
    await refetch();
  }, []);

  const refetch = async () => {
    Promise.all([
      fetchAfterMutate({ isSuccess: true, fetchFn: refetchFriendList }),
      fetchAfterMutate({ isSuccess: true, fetchFn: refetchFavoriteFriendList }),
    ]);
  };

  const addFavoriteFriend = async (friendId: string) => {
    await API.get(URLs.friends.addFavoriteFriend(friendId));
    await refetch();
  };

  const fetchAfterMutate = (params: {
    isSuccess: boolean;
    fetchFn: (_?: any) => void;
  }) => {
    const { isSuccess, fetchFn } = params;
    return new Promise((resolve, reject) => {
      if (isSuccess) resolve(fetchFn());
      else reject(new Error("fail mutate"));
    });
  };

  return { addFavoriteFriend, deleteFavoriteFriend };
}
