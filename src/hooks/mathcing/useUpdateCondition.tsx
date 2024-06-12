import API from "@api/api";
import URLs from "@api/urls";
import { MatchingCondition } from "@models/matching";
import { useCallback } from "react";



export const useUpdateCondition = () =>{

    const updateCondition = useCallback(
        async (condition : MatchingCondition) =>{
            const res = await API.post(URLs.matching.updateCondition,condition);
            return res;
        },[]);


    return {updateCondition}

}