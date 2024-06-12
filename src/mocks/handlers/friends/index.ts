import { HttpResponse, http } from "msw";
import {
  favoriteFriendList,
  friendDetailData,
  friendList,
  blockedFriendList,
} from "./data";

const fetchFriendList = http.get("/api/friend/list", () => {
  const randIdx = Math.floor(Math.random() * friendList.length) + 1;
  return HttpResponse.json(friendList.slice(0, randIdx));
});

const deleteFriend = http.get("/api/friend/delete/:friendId", () => {
  return HttpResponse.json();
});


  const fetchFavoriteFriendList = http.get("/api/friend/favoriteList", () => {
  const randIdx = Math.floor(Math.random() * favoriteFriendList.length) + 1;
  return HttpResponse.json(favoriteFriendList.slice(0, randIdx));
});

const addFavoriteFriend = http.get(
  "/api/friend/friendFavorite/:friendId",
  () => {
    return HttpResponse.json();
  },
);

const deleteFavoriteFriend = http.get(
  "/api/friend/friendUnFavorite/:friendId",
  () => {
    return HttpResponse.json();
  },
);

const fetchFriendDetail = http.get(
  "/api/friend/friendProfile/:friendId",
  () => {
    return HttpResponse.json(friendDetailData);
  },
);
const fetchBlockList = http.get("/api/friend/blockList", () => {
  const randIdx = Math.floor(Math.random() * blockedFriendList.length) + 1;
  return HttpResponse.json(blockedFriendList.slice(0, randIdx));
});

const blockFriend = http.get("/api/friend/friendBlock/:friendId", () => {
  return HttpResponse.json();
});

const unblockFriend = http.get("/api/friend/friendUnBlock/:friendId", () => {
  return HttpResponse.json();
});

export default [
  fetchFriendList,
  deleteFriend,
  fetchFavoriteFriendList,
  addFavoriteFriend,
  deleteFavoriteFriend,
  fetchFriendDetail,
  fetchBlockList,
  blockFriend,
  unblockFriend,
];
