import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useAddRefund from "@hooks/profile/useAddRefund";
import useModal from "@hooks/common/useModal";
import { AddRefund, RefundListData, defaultAddRefund } from "@models/profile";
import InputPayText from "./inputPayText";
import useRefund from "@hooks/profile/useRefund";

type Props = {
  orderId: Number;
  setIsClick?: React.Dispatch<React.SetStateAction<string[]>>;
  readonly: boolean;
  fixReason?: string;
  approve?: Number;
  setData?: React.Dispatch<React.SetStateAction<RefundListData>>;
};

export default function RefundPop({
  orderId,
  readonly,
  fixReason,
  approve,
  setIsClick,
}: Props) {
  const [refundInfo, setRefundInfo] = useState<AddRefund>(defaultAddRefund);
  const { addRefund } = useAddRefund();
  const { deleteRefund } = useRefund();
  const { removeCurrentModal } = useModal();

  const handleAddRefund = () => {
    if (refundInfo.reason == "") return;

    addRefund(refundInfo);
    removeCurrentModal();
    window.location.reload();
    //setIsClick(["#212121", "#A86efa"]);

  };

  useEffect(() => {
    setRefundInfo((prev) => ({
      ...prev,
      partnerOrderId: Number(orderId),
    }));
  }, []);

  return (
    <>
      <Container>
        <InputPayText
          title={
            (readonly && approve !== 2) || (readonly && approve === 2)
              ? "환불신청사유"
              : "환불사유를 입력하세요"
          }
          placeholder=""
          width="100%"
          height="max-content"
          id="reason"
          value={
            readonly && approve !== 2
              ? fixReason || ""
              : approve === 2
                ? fixReason || refundInfo.reason
                : refundInfo.reason || ""
          }
          readOnly={(readonly && approve !== 2) || approve === 2}
          onChange={
            readonly && approve !== 2
              ? () => {}
              : (e) => {
                  setRefundInfo((prev) => ({
                    ...prev,
                    reason: String(e.target.value),
                  }));
                }
          }
          btnTitle={approve !== 2 ? "확인" : "환불취소"}
          onClick={() => {
            if (approve == 2) {
              deleteRefund(orderId);
              removeCurrentModal();
              window.location.reload();

            } else if (!readonly && approve !== 2) {
              handleAddRefund();
            } else {
              removeCurrentModal();
            }
          }}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 0 20px;
`;
