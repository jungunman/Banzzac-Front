import { MatchingBottomButton, ProfileDetail } from "@containers/common/ProfileDetailModal";
import styled from "@emotion/styled";
import useFetchMatching from "@hooks/mathcing/useFetchMatchings";
import { conditionState } from "@recoil/matching";
import { useState } from "react";
import { useRecoilValue } from "recoil";



export default function MatchingDetails(){
    const conditionsState = useRecoilValue(conditionState);
    const [idx,setIdx] = useState(0);
    //const {data:matchedMembers, setData:setMatchedMembers}=useFetchMatching(conditionsState); 


    return (
        <Container>
            <ProfileDetail friendId={"zkdlwjsxm@example.com"} />
            <AbsoluteBtnBox>
                <MatchingBottomButton setIdx={setIdx} friendId={"zkdlwjsxm@example.com"}/>
            </AbsoluteBtnBox>
        </Container>
    )
}


const Container = styled.div`
    position: relative;
    height: 79%;
    width: 100%;
`

const AbsoluteBtnBox = styled.div`
    width: 100%;
    position: fixed;
    bottom: 100px;
    
`