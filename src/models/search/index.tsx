import { Data } from ".."

type MemberDTO = {
    gender : number,
    id : string,
    img : string,
    nickname : string,
    no : number,
    temperature : number,
    cnt : number,
    walkingStyle : string[]
  }



export const defaultMemberDTO = {
    gender : 1,
    id : "",
    img : "",
    nickname : "",
    no : 0,
    temperature : 0,
    cnt : 0,
    walkingStyle : [""]
  }


export type SearchMember = {
    latitude : number,
    longitude : number,
    member : MemberDTO
}

export interface DatasForm extends Data{
    data : SearchMember[]
}
  
export const defaultSearchMember = {
    latitude : 0,
    longitude : 0,
    member : defaultMemberDTO,
}