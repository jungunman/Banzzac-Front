import { MatchingCondition, defaultCondition } from "@models/matching";
import { atom } from "recoil";


export const conditionState = atom<MatchingCondition>({
    key : "conditionState",
    default : defaultCondition
});