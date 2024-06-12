import API from "@api/api";
import URLs from "@api/urls";
import { RefundListData, defaultRefundList } from "@models/profile";
import { useCallback, useEffect, useState } from "react";

export default function useRefundList() {
  const [data, setData] = useState<RefundListData>({
    success: true,
    data: [defaultRefundList],
    error: null,
  });

  const fetchRefund = useCallback(async () => {
    const res: RefundListData = await API.get(URLs.profile.fetchRefund);
    setData(res);
  }, []);

  useEffect(() => {
    fetchRefund();
    console.log(data);
  }, []);

  return { data, setData };
}
