import { Data } from "@models/common";

export type Profile = {
  no: number;
  gender: number;
  age: number;
  cnt: number;
  isGrant: number;
  quantity: number;
  id: string;
  pwd: string;
  img: string;
  walkingStyleStr: string;
  nickname: string;
  phone: string;
  statusMessage: string | null;
  date: string;
  walkingStyle: string[];
  temperature: number;
};

export const defaultProfile = {
  no: 0,
  gender: 1,
  age: 0,
  cnt: 0,
  isGrant: 0,
  quantity: 0,
  id: "",
  pwd: "",
  img: "",
  walkingStyleStr: "",
  nickname: "",
  phone: "",
  statusMessage: null,
  date: "",
  walkingStyle: [],
  temperature: 0,
};

export interface ProfileData extends Data {
  data: Profile[];
}

export type Pet = {
  id: string;
  name: string;
  img: string;
  gender: string;
  neutrification: string;
  size: string;
  kind: string;
  personality: string;
  activity: string;
  age: number;
  weight: number;
  personalityArr: string[];
};

export interface PetData extends Data {
  data: Pet[];
}

export const defaultPet = {
  id: "",
  name: "",
  img: "",
  gender: "",
  neutrification: "",
  size: "",
  kind: "",
  personality: "",
  activity: "",
  age: 0,
  weight: 0,
  personalityArr: [],
};

export type PaymentApprove = {
  next_redirect_pc_url: string;
  tid: string;
  nextRedirect_mobile_url: string;
};

export const defaultPaymentApprove = {
  next_redirect_pc_url: "",
  tid: "",
  nextRedirect_mobile_url: "",
};

export type PaymentList = {
  partnerOrderId: number;
  partnerUserId: string;
  tid: string;
  aid: string;
  paymentMethodType: string;
  quantity: number;
  totalAmount: number;
  approvedAt: Date;
  approvedAtStr: string;
};

export interface PaymentListData extends Data {
  data: PaymentList[];
}

export const defaultPaymentList = {
  partnerOrderId: 0,
  partnerUserId: "",
  tid: "",
  aid: "",
  paymentMethodType: "",
  quantity: 0,
  totalAmount: 0,
  approvedAt: "",
  approvedAtStr: "",
};

export type AddRefund = {
  partnerOrderId: number;
  reason: string;
};

export const defaultAddRefund = {
  partnerOrderId: 0,
  reason: "",
};

export type RefundList = {
  partnerOrderId: number;
  approve: number;
  reason: string;
  refundRequestDate: string;
  approveTime: string;
  refundRequestDateStr: string;
  approveTimeStr: string;
  quantity: number;
  totalAmount: number;
  sessionId: null;
};

export interface RefundListData extends Data {
  data: RefundList[];
}

export const defaultRefundList = {
  partnerOrderId: 0,
  approve: 0,
  reason: "",
  refundRequestDate: "",
  approveTime: "",
  refundRequestDateStr: "",
  approveTimeStr: "",
  quantity: 0,
  totalAmount: 0,
  sessionId: null,
};

export type WalkingHistory = {
  no: number;
  promiseStatus: number;
  memberNo: number;
  comment: string;
  memberNickname: string;
  memberImg: string;
  memberId: string;
  reviewScore: number;
  reviewContent: string;
  dogName: string;
  dogImg: string;
  startWalkTimeStr: string;
  endWalkTimeStr: string;
  startWalkTime: string;
  endWalkTime: string;
};

export interface WalkingHistoryData extends Data {
  data: WalkingHistory[];
}
