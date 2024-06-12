import SvgSelector from "@components/Svg/SvgSelector";
import styled from "@emotion/styled";
import { useState } from "react";
import DogCondition from "./DogCondition";
import ProfileCondition from "./ProfileCondition";



export default function ConditionScreen(){
    const [selectColor,setSelectColor] = useState(["#A86EFA","#212121"]);
    return(<>
        <Header>
            <HeaderContent onClick={()=>setSelectColor(["#A86EFA","#212121"])}>
                <SvgSelector svg={"dogFace"} width={24} height={24} stroke={selectColor[0]} />
                <TextInHeader color={selectColor[0]}>반려견</TextInHeader>
            </HeaderContent>
            <HeaderContent onClick={()=>setSelectColor(["#212121","#A86EFA"])}>
                <SvgSelector svg={"face"} width={24} height={24} stroke={selectColor[1]} />
                <TextInHeader color={selectColor[1]}>보호자</TextInHeader>
            </HeaderContent>
        </Header>
        {selectColor[0] === "#A86EFA" ? <DogCondition/> : <ProfileCondition />}
    </>)
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderContent = styled.div`
    margin-top: 30px;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`
const TextInHeader = styled.span<{color:string}>`
    font-size: 20px;
    color : ${({color}) => (color)};
    font-weight: 600;
`


