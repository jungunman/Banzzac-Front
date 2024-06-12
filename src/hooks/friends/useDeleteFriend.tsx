import API from "@api/api";
import URLs from "@api/urls";
import { TEST_EMAIL } from "@constants/index";
import { useCallback } from "react";
import useFavoriteFriendList from "./useFavoriteFriendList";
import useFriendList from "./useFriendList";

export default function useDeleteFriend(id: string) {
  const { refetch: refetchFriendList } = useFriendList(TEST_EMAIL, false);
  const { refetch: refetchFavoriteFriendList } = useFavoriteFriendList(
    TEST_EMAIL,
    false,
  );

  const deleteFriend = useCallback(async (friendId: string) => {
    await API.get(URLs.friends.deleteFriend(friendId));
    await refetch();
  }, []);

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

  const refetch = async () => {
    Promise.all([
      fetchAfterMutate({ isSuccess: true, fetchFn: refetchFriendList }),
      fetchAfterMutate({ isSuccess: true, fetchFn: refetchFavoriteFriendList }),
    ]);
  };

  return { deleteFriend };
}
