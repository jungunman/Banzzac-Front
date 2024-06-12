import { PaymentList, RefundList, RefundListData } from "@models/profile";
import MatchingTicket from "@components/matchingTicket";
import Seperator from "@components/Seperator";
import DividerDefault from "@components/Divider/Divider";
import { PayStyledDiv } from "./Payment";
import useModal from "@hooks/common/useModal";
import RefundPop from "@components/matchingTicket/refundPop";
import PayButton from "@components/matchingTicket/payButton";
import { useState, useEffect } from "react";

type Props = {
  payList: PaymentList[];
  setIsClick?: React.Dispatch<React.SetStateAction<string[]>>;
};

export function PayList({ payList, setIsClick }: Props) {
  const { addModal } = useModal();
  const today = new Date();
  const [approveDay, setApproveDay] = useState(new Date());

  useEffect(() => {
    const newApproveDay = new Date(today);
    newApproveDay.setDate(today.getDate() - 7);
    setApproveDay(newApproveDay);
  }, [payList]);

  const handleRefund = (orderId: number) => {
    addModal({
      type: "popup",
      props: {
        contents: (
          <RefundPop
            readonly={false}
            orderId={orderId}
            setIsClick={setIsClick}
          />
        ),
        buttonProps: [],
      },
    });
  };
  return (
    <>
      {payList.map((data, i) => {
        return (
          <div key={i}>
            <PayStyledDiv>
              <MatchingTicket
                semiTitle={`매칭권 ${data.quantity}개`}
                eventDate={`${data.approvedAtStr}`}
                afterPay={true}
              ></MatchingTicket>
              {new Date(data.approvedAt) > approveDay &&
                new Date(data.approvedAt) <= today && (
                  <PayButton
                    text="환불신청"
                    onClick={() => handleRefund(data.partnerOrderId)}
                  />
                )}
            </PayStyledDiv>
            <Seperator height={7} />
            <DividerDefault width={"100%"} />
            <Seperator height={7} />
          </div>
        );
      })}
    </>
  );
}

type Props2 = {
  refundList: RefundList[];
};

export function RefundStatusList({ refundList }: Props2) {
  const { addModal } = useModal();
  const handleRefund = (orderId: number, reason: string, approve?: Number) => {
    addModal({
      type: "popup",
      props: {
        contents: (
          <RefundPop
            readonly={approve == null}
            orderId={orderId}
            fixReason={reason}
            approve={approve}
          />
        ),
        buttonProps: [],
      },
    });
  };
  const chkApprove = (approve: number, orderId: number, reason: string) => {
    switch (approve) {
      case 1:
        return (
          <PayButton
            text="승인"
            onClick={() => {
              handleRefund(orderId, reason);
            }}
          />
        );
      case 0:
        return (
          <PayButton
            text="거절"
            onClick={() => {
              handleRefund(orderId, reason);
            }}
          />
        );
      default:
        return (
          <PayButton
            text="대기"
            onClick={() => {
              handleRefund(orderId, reason, approve);
            }}
          />
        );
    }
  };
  return (
    <>
      {refundList.map((data, i) => {
        return (
          <div key={i}>
            <PayStyledDiv>
              <MatchingTicket
                semiTitle={`매칭권 ${data.quantity}개`}
                eventDate={`환불신청일 ${data.refundRequestDateStr}`}
                afterPay={true}
              ></MatchingTicket>
              {chkApprove(data.approve, data.partnerOrderId, data.reason)}
            </PayStyledDiv>
            <Seperator height={7} />
            <DividerDefault width={"100%"} />
            <Seperator height={7} />
          </div>
        );
      })}
    </>
  );
}
