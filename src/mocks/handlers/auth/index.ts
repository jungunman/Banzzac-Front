import { HttpResponse, http } from "msw";

const fetchToken = http.post("/api/login", () => {
  return HttpResponse.json({
    accessToken: "xxx",
    refreshToken: "yyy",
  });
});

const refreshAccessToken = http.post("/api/refresh", () => {
  return HttpResponse.json({
    accessToken: "zzz",
  });
});

export default [fetchToken, refreshAccessToken];
