import API from "@api/api";
import URLs from "@api/urls";
import { RefundListData } from "@models/profile";
import { useCallback } from "react";

export default function useRefund() {
  const updateRefund = useCallback(async (refund: RefundListData) => {
    const res = await API.post(URLs.profile.updateRefund, refund);
    return res;
  }, []);

  const deleteRefund = useCallback(async (orderId: Number) => {
    const res = await API.get(URLs.profile.deleteRefund(orderId));
    return res;
  }, []);
  return { deleteRefund };
}
