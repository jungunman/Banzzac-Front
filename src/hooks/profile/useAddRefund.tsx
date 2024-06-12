import API from "@api/api";
import URLs from "@api/urls";
import { AddRefund, RefundListData } from "@models/profile";
import { useCallback, useState } from "react";

export default function useAddRefund() {
  const [data, setData] = useState<RefundListData>();
  const addRefund = useCallback(
    async (refund: AddRefund) => {
      const res: RefundListData = await API.post(
        URLs.profile.addRefund,
        refund,
      );
      setData(res);
    },
    [data],
  );

  return { addRefund, data };
}
