import API from "@api/api";
import URLs from "@api/urls";
import { Pet, User } from "@models/signup";
import { useCallback } from "react";

export default function useSignup(id: string) {
  const addUser = useCallback(async (user: User) => {
    const res = await API.post(URLs.signup.registUser, user);
    return res;
  }, []);

  const addPet = useCallback(async (pet: Pet) => {
    const res = await API.post(URLs.signup.registPet(id), pet);
    return res;
  }, []);

  return { addUser, addPet };
}
