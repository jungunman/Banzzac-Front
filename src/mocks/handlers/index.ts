import { HttpResponse, http } from "msw";
import chatHandlers from "./chat";
import profileHandlers from "./profile";
import friendsHandlers from "./friends";
import signupHandlers from "./signup";
import matchingHandlers from "./matching";
import authHandlers from "./auth";

export default [
  http.get("/todo", () => {
    return HttpResponse.json(["eat", "drink", "sleep"]);
  }),
  ...chatHandlers,
  ...profileHandlers,
  ...friendsHandlers,
  ...signupHandlers,
  ...matchingHandlers,
  ...authHandlers,
];
