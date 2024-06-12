import { HttpResponse, http } from "msw";
import { chatRoomList } from "./data";

export default [
  http.get("/api/chat/:id", () => {
    return HttpResponse.json(chatRoomList);
  }),
];
