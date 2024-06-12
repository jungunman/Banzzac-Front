import API from "@api/api";
import { Cookie } from "@utils/Cookie";
import { useEffect } from "react";

export default function TokenInitialize() {
  const getToken = async () => {
    const res: { accessToken: string; refreshToken: string } = await API.post(
      "/api/login",
      {
        id: "zkdlwjsxm@example.com",
        pwd: "1111",
      },
    );
    console.log(res);
    Cookie.setCookie("access-token", res.accessToken);
  };

  useEffect(() => {
    // getToken();
  }, []);

  return <></>;
}
