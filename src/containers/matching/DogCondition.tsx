import DividerDefault from "@components/Divider/Divider";
import ButtonSelect from "@components/Input/ButtonSelect"
import Seperator from "@components/Seperator";
import { ACTIVITY, DOG_PERSONALITY, SIZE } from "@constants/profile"
import styled from "@emotion/styled"
import useModal from "@hooks/common/useModal";
import { useUpdateCondition } from "@hooks/mathcing/useUpdateCondition";
import { conditionState } from "@recoil/matching";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const gridStlye= { gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }

export default function DogCondition(){
    const [condition, setCondition] = useRecoilState(conditionState);
    const [reset] = useState(condition);
    const {removeCurrentModal} = useModal();
    const {updateCondition} = useUpdateCondition();
    
    const handleChangeSize = (idxArr: number[]) => {
        const size = idxArr.map((i) => SIZE[i]);
        setCondition((prev)=> ({...prev, size : size[0]}))
       
    }

    function handleChangeNature( idxArr: number[]){
        setCondition((prev)=>{
            const natureArr = idxArr.map((i)=> DOG_PERSONALITY[i])
            return {...prev, dogNature:natureArr};
        })
    }
    
    function handleChangeActivate( idxArr: number[]){
        const activate = idxArr.map((i)=>ACTIVITY[i]);
        setCondition((prev) => ({...prev, amountOfActivity:activate[0] }))
    }

    function handleResetValue(){
        setCondition(reset)
    }



    return (<Container>
        <RowBox>
            <Seperator height={40} />
            <ButtonSelection
                gridStyle={gridStlye}
                label="크기"
                isDuplicate={false}
                maxSelection={1}
                buttonList={SIZE}
                value={[SIZE.findIndex((size)=> condition.size === size)]}
                onChangeButton={handleChangeSize}
            />
            <Seperator height={24} />
            <DividerDefault  width="100" />
            <Seperator height={24} />
            <ButtonSelection gridStyle={gridStlye} 
                label="성격"
                isDuplicate={true}
                maxSelection={3}
                buttonList={DOG_PERSONALITY}
                value={condition.dogNature.map((nature)=> DOG_PERSONALITY.findIndex((v)=> v === nature))}
                onChangeButton={handleChangeNature} />
            <Seperator height={24} />
            <DividerDefault width="100" />
            <Seperator height={24} />
            <ButtonSelection 
                gridStyle={gridStlye}
                label="활동량" 
                isDuplicate={false} 
                maxSelection={1} 
                buttonList={ACTIVITY} 
                value={[ACTIVITY.findIndex((v)=> v===condition.amountOfActivity)]} 
                onChangeButton={handleChangeActivate} />
        </RowBox>
        <ButtonBox>
            <ActionButton onClick={()=>handleResetValue()} bgcolor="#fff" width="35%">초기화</ActionButton>
            <ActionButton onClick={()=>{
                updateCondition(condition)
                removeCurrentModal();
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
