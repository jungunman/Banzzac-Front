import { HttpResponse, http } from "msw";
import {
  deletePetResponse,
  petData,
  profile,
  updatePetResponse,
  updateUserResponse,
} from "./data";

const fetchPets = http.get("/api/profile/dog/:id", () => {
  return HttpResponse.json(petData);
});

const fetchProfile = http.get("/api/profile/:id", () => {
  return HttpResponse.json(profile);
});

const deletePet = http.get("/api/profile/dog/:id/delete/:name", () => {
  return HttpResponse.json(deletePetResponse);
});

const updatePet = http.post("/api/profile/dog/:id/:name", () => {
  return HttpResponse.json(updatePetResponse);
});

const updateUser = http.post("/api/profile/:id", () => {
  return HttpResponse.json(updateUserResponse);
});

const withdraw = http.post("/api/profile/:id/withdraw", () => {
  return HttpResponse.json();
});

const addPet = http.post("/api/profile/dog/:id", () => {
  return HttpResponse.json();
});

export default [
  fetchPets,
  fetchProfile,
  deletePet,
  updatePet,
  updateUser,
  withdraw,
  addPet,
];
