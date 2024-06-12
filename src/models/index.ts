export * from "./common";
export * from "./chat";

export type HeaderIcon = "search" | "friendAdd" | "setting";

export type SvgIcon =
  | "chat"
  | "feed"
  | "friends"
  | "profile"
  | "search"
  | "setting"
  | "twinkle"
  | "userAdd"
  | "dogFace"
  | "face"
  | "expandLeft"
  | "expandUp"
  | "expandDown"
  | "close"
  | "fillTwinkle"
  | "payment"
  | "paymentHistory"
  | "filledPin"
  | "pin"
  | "femail"
  | "exit"
  | "filledAddRound"
  | "filledCloseRound"
  | "chatPlus"
  | "userClose"
  | "userRemove"
  | "sort"
  | "filledStar"
  | "star"
  | "menu"
  | "sendButton";

export type NavItem = { route: string; name: string; icon: SvgIcon };
