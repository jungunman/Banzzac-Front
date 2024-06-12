import API from "@api/api"
import URLs from "@api/urls"
import {DatasForm} from "@models/search"
import { useEffect, useState } from "react"

export default function useSearchMember(locations:any){
    const [severData,setSeverData]=useState<DatasForm>()
    console.log("들어와라이~");

    const getMembers=async ()=>{
        const res:DatasForm=await API.post(URLs.search.searchMember,locations)
        setSeverData(res)
    }

    useEffect(()=>{
        getMembers()
    },[locations])

    return {severData}
}