import { Modal } from "@models/common";
import { atom } from "recoil";

export const modalState = atom<Modal[]>({
  key: "modalState",
  default: [],
});

export const userEmailState = atom<number>({
  key: "userEmailState",
  default: 0,
});
