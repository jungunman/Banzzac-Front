import { HttpResponse, http } from "msw";

const createMember = http.post("/api/member/createMember", () => {
  return HttpResponse.json();
});

const createDog = http.post("/api/member/createDog/:id", () => {
  return HttpResponse.json();
});

export default [createMember, createDog];
