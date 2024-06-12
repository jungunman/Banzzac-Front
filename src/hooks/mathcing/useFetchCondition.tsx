import API from "@api/api";
import URLs from "@api/urls";
import { MatchingCondition, defaultCondition } from "@models/matching";
import { conditionState } from "@recoil/matching";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";



export default function useFetchCondition(){
    const [data, setData] = useRecoilState<MatchingCondition>(conditionState);
    
    const fetchCondition = useCallback(async () =>{
        const res : MatchingCondition = await API.get(URLs.matching.fetchCondition);
        setData(res);
    },[])
    
    useEffect(()=>{
        fetchCondition();
    },[])

    return {data};
}