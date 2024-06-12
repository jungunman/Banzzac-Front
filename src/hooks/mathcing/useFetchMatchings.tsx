import API from "@api/api";
import URLs from "@api/urls";
import { Matching, MatchingCondition, MatchingData, defaultCondition, defaultMatching } from "@models/matching";
import { conditionState } from "@recoil/matching";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

type Props  = {
    condition : any
}

export default function useFetchMatching(condition : any){
    const [data, setData] = useState<Matching[]>([defaultMatching]);
    
    const fetchMatchings = useCallback(async () =>{
        const res :MatchingData = await API.post(URLs.matching.fetchMatchings,condition);
        setData(res.data);
    },[])
    
    useEffect(()=>{
        fetchMatchings();
    },[])

    return {data,setData};
}