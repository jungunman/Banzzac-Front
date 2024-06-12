import { NavItem } from "@models/index";

export const TEST_EMAIL = "zkdlwjsxm@example.com ";
export const navList: NavItem[] = [
  {
    route: "/friends",
    icon: "friends",
    name: "친구",
  },
  {
    route: "/chat/" + TEST_EMAIL,
    icon: "chat",
    name: "채팅",
  },
  {
    route: "/search",
    icon: "twinkle",
    name: "탐색",
  },
  {
    route: "/matching",
    icon: "feed",
    name: "매칭",
  },
  {
    route: "/profile",
    icon: "profile",
    name: "내 프로필",
  },
];
