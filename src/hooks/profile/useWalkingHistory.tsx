import API from "@api/api";
import URLs from "@api/urls";
import { WalkingHistoryData } from "@models/profile";
import { useCallback, useEffect, useState } from "react";

export default function useWalkingHistory() {
  const [data, setData] = useState<WalkingHistoryData>();

  const fetchWalkingHistory = useCallback(async () => {
    const res: WalkingHistoryData = await API.get(
      URLs.profile.fetchWalkingHistory,
    );
    setData(res);
  }, []);

  useEffect(() => {
    fetchWalkingHistory();
  }, []);

  return { data };
}
