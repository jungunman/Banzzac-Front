import { defaultPet } from "@models/profile";
import { UserInformation, defaultUser } from "@models/signup";
import { atom } from "recoil";

export const userInformationState = atom<UserInformation>({
  key: "userInformationState",
  default: {
    user: defaultUser,
    pet: defaultPet,
  },
});
