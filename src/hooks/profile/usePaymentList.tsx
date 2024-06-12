import API from "@api/api";
import URLs from "@api/urls";
import { PaymentListData } from "@models/profile";
import { useCallback, useEffect, useState } from "react";

export default function usePaymentList() {
  const [data, setData] = useState<PaymentListData>();

  const fetchPayment = useCallback(async () => {
    const res: PaymentListData = await API.get(URLs.profile.fetchPayment);
    setData(res);
  }, []);

  useEffect(() => {
    fetchPayment();
  }, []);

  return { data };
}
