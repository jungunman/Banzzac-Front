import API from "@api/api";
import URLs from "@api/urls";
import { useEffect, useState } from "react";

export default function useMswTest() {
  const [data, setData] = useState<string[]>();

  const getMswTest = async () => {
    const res: string[] = await API.get(URLs.mswTest);
    setData(res);
  };

  useEffect(() => {
    getMswTest();
  }, []);

  return { data };
}
