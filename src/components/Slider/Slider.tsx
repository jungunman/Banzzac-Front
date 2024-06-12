import styled from "@emotion/styled";
import { MatchingCondition } from "@models/matching";
import { Slider } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react";

function valuetext(value: number) {
    return `${value}살`;
  }
const minDistance = 10;

type Props ={
    min?:number,
    max?:number,
    setState : Dispatch<SetStateAction<MatchingCondition>>
}
export default function MultiSlider( {max=100, min=0, setState} :Props ){
   
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }
        
        

        if(activeThumb === 0){
            setState((prev)=>({...prev, ageRangeStart: Math.min(newValue[0], max - minDistance), ageRangeEnd : max}))
        }else{
            setState((prev)=>({...prev, ageRangeStart: min, ageRangeEnd : Math.max(newValue[1], min + minDistance)}))
        }
        console.log(newValue);
        
    };

    return(
        <Container>
            <Box>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={[min,max]}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    getAriaValueText={valuetext}
                    step={10}
                    disableSwap
                    style={{color : "#000"}}

                />
            </Box>
        </Container>
    )
}


const Container = styled.div`
    box-sizing : border-box;
    display: flex; 
    align-items:center;
    justify-content:center;

`;
const Box = styled.div`
    width: 90%;
`;