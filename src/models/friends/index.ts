import { Data } from "@models/common";

export type Friend = {
  id: string;
  friendId: string;
  dogImg: string;
  dogName: string;
  block: number;
  mstatusMesaage: string;
  mnickname: string;
  mimg: string;
};

export type FriendDetail = {
  no: number;
  gender: number;
  age: number;
  cnt: number;
  isGrant: number;
  id: string;
  pwd: string;
  img: string;
  walkingStyleStr: string;
  nickName: string;
  phone: string;
  statusMessage: string;
  date: string;
  walkingStyle: string[];
  temperature: number;
};

export interface FriendData extends Data {
  data: Friend[];
}
