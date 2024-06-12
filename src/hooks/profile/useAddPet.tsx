import API from "@api/api";
import URLs from "@api/urls";
import { Pet } from "@models/profile";
import { useCallback } from "react";

export default function useAddPet() {
  const addPet = useCallback(async (pet: Pet) => {
    const res = await API.post(URLs.profile.addPet, pet);
    return res;
  }, []);

  return { addPet };
}
