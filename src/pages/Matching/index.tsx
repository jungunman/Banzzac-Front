


import Seperator from "@components/Seperator";
import MatchingDetails from "@containers/matching/MatchingDetails";
import styled from "@emotion/styled";
import useFetchCondition from "@hooks/mathcing/useFetchCondition";
import Navigator from "@layouts/Navigator";import RoundHeader from "@layouts/RoundHeader";
import { useState } from "react";


export default function Matching() {
  const {data:condition}=useFetchCondition();
  const [isStart, setIsStart] = useState(false);
 
  

  return (
    <>
      <RoundHeader />
      <Seperator height={20} />
            <MatchingDetails />
      <Navigator/>
    </>
  );
}



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`

