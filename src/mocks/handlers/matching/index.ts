import { HttpResponse, http } from "msw";
import { conditionData } from "./data";

const fetchCondition = http.get("/api/matching/condition", () => {
  return HttpResponse.json(conditionData);
});

export default [fetchCondition];
