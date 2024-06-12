import ButtonSelect from "@components/Input/ButtonSelect";
import styled from "@emotion/styled";
import { conditionState } from "@recoil/matching";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { gridStlye } from "./DogCondition";
import { GENDER, WALKING_STYLE } from "@constants/profile";
import Seperator from "@components/Seperator";
import DividerDefault from "@components/Divider/Divider";
import MultiSlider from "@components/Slider/Slider";
import { MatchingCondition } from "@models/matching";
import { useUpdateCondition } from "@hooks/mathcing/useUpdateCondition";
import useModal from "@hooks/common/useModal";



export default function ProfileCondition(){
    const [condition, setCondition] = useRecoilState(conditionState);
    const [reset] = useState(condition);
    const {updateCondition} = useUpdateCondition();
    const {removeCurrentModal} = useModal();

    function handleChangeGender(idxArr: number[]){
        const gender = idxArr.map((i)=> GENDER[i])
        const changeGender = gender[0] === "남자" ? 1 :2
        setCondition((prev)=>({...prev, gender : changeGender}))
    }

    function handleWalkingStyle(idxArr : number[]){
        setCondition((prev)=>{
            const walkingStyleArr = idxArr.map((idx) => WALKING_STYLE[idx]);
            return {...prev, walkingStyle : walkingStyleArr}
        })
        console.log(condition);
        
    }

    function handleResetValue(){
        
        setCondition(reset)
    }

    return (<Container>
        <RowBox>
            <Seperator height={40} />
            <ButtonSelection
                gridStyle={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}
                label="성별"
                isDuplicate={false} 
                buttonList={GENDER} 
                value={[GENDER.findIndex((gender)=> (condition.gender ===1 ? "남자":"여자") === gender)]}
                maxSelection={1}
                onChangeButton={handleChangeGender}    
            />

            <Seperator height={24} />
            <DividerDefault width="100" />
            <Seperator height={24} />

            <TypeText>연령대</TypeText>
            <MultiSlider max={condition.ageRangeEnd === null ? 100:condition.ageRangeEnd} min={condition.ageRangeStart === null ? 0: condition.ageRangeStart} setState={setCondition} />
            {(condition.ageRangeStart !=null && condition.ageRangeEnd != null) 
            &&(condition.ageRangeStart !== 0 || condition.ageRangeEnd !== 100) 
            ?<AgeRange>{condition.ageRangeStart}세 ~ {condition.ageRangeEnd}세</AgeRange> 
            :<AgeRange>전체</AgeRange>}

            <Seperator height={24} />
            <DividerDefault width="100" />
            <Seperator height={24} />

            <ButtonSelection 
                gridStyle={gridStlye}
                buttonList={WALKING_STYLE}
                label="산책 스타일"
                isDuplicate={true}
                maxSelection={5}
                value={condition.walkingStyle.map((v)=> WALKING_STYLE.findIndex((walkingStyle)=> walkingStyle === v))}
                onChangeButton={handleWalkingStyle}
            />

        </RowBox>
        <ButtonBox>
            <ActionButton onClick={()=>handleResetValue()} bgcolor="#fff" width="35%">초기화</ActionButton>
            <ActionButton onClick={()=>
                {
                    updateCondition(condition)
                    removeCurrentModal()
                }} bgcolor="#000" width="65%">적용하기</ActionButton>
        </ButtonBox>
    </Container>)
}




const Container = styled.div`
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
`

const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;
const RowBox = styled.div`
    flex-grow: 1; /* 남은 공간을 채우도록 설정 */   
`

const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const ActionButton = styled.button<{bgcolor:string, width:string}>`
    border-radius: 8px;
    display:flex ;
    align-items: center;
    justify-content: center;
    padding : 15px 20px;
    border: 1px solid #757575;
    background-color: ${({bgcolor})=> bgcolor};
    width: ${({width})=>width};
    color : ${({bgcolor})=>bgcolor==="#000" ? "#fff":"#757575"};
    font-size: 16px;
    font-weight: 700;
`
const TypeText = styled.h4`
    font-size: 16px;
    font-weight: 700;
    color: #000;
    line-height: 24px;
`

const AgeRange = styled.p`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`