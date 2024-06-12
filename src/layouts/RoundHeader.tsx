import SvgSelector from "@components/Svg/SvgSelector";
import TagDefault from "@components/Tag/TagDefault";
import styled from "@emotion/styled";
import useModal from "@hooks/common/useModal";
import ConditionScreen from "@containers/matching/ConditionScreen";
import { conditionState } from "@recoil/matching";
import { useRecoilState, useRecoilValue } from "recoil";



export default function RoundHeader() {
  const {addModal} = useModal();
  const conditionsState = useRecoilValue(conditionState);
  const handleConditionScreen = () =>{
    addModal({
      type : "fullscreen",
      props : {
        contents :<ConditionScreen />,
        hasCloseButton : true,
      }
    })
  }

  return (
    <Header onClick={()=>{handleConditionScreen()}}>
      <Wrapper>
        <SvgSelector svg={"dogFace"} width={24} height={24} stroke="#212121" />
        <TagWrapper>
          {
           conditionsState.dogNature.map((v,i)=><TagDefault key={i} txt={v}/>)
          }
        </TagWrapper>
      </Wrapper>
      <Wrapper>
        <SvgSelector svg={"face"} width={24} height={24} stroke="#212121" />
        <TagWrapper>
          {
            conditionsState.walkingStyle.map((v,i)=><TagDefault key={i} txt={v}/>)
          }
        </TagWrapper>
      </Wrapper>
    </Header>
  );
}

const Header = styled.header`
  border-bottom: 1px solid #212121;
  border-radius: 0px 0px 16px 16px;
  box-shadow: 0px 4px 4px 0px #00000026;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  justify-content: flex-start;
  align-items: center;
`;


const TagWrapper = styled.div`
  display:flex;
  gap:2px;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`