export type User = {
  img: string;
  walkingStyle: string[];
  id: string;
  pwd: string;
  gender: number;
  nickname: string;
  phone: string;
};

export type Pet = {
  id: string;
  name: string;
  age: number;
  img: string;
  gender: string;
  weight: number;
  neutrification: string;
  size: string;
  kind: string;
  personality: string;
  activity: string;
};

export type UserInformation = {
  user: User;
  pet: Pet;
};

export const defaultUser = {
  img: "",
  walkingStyle: [],
  id: "",
  pwd: "",
  gender: 1,
  nickname: "",
  phone: "",
};

export const defaultPet = {
  id: "",
  name: "",
  age: 0,
  img: "",
  gender: "",
  weight: 0,
  neutrification: "",
  size: "",
  kind: "",
  personality: "",
  activity: "",
};
