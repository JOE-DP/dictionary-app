import styled from 'styled-components'
import React from 'react';

function Darktoggle(props) {
  let colorRange = props.colorRange
 

  
  return (
    <Container>
      <p style={{color: colorRange.primaryFont}}>Darkmode:</p>
      <Darkbutton onClick={props.toggleState} style={{background: colorRange.secondaryBackground}}>
      <p style={{color: colorRange.primaryFont}}>{props.darkToggle ? 'ON' : 'OFF'}</p>
      </Darkbutton>
    </Container>
  );
}
const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 30%;
`
const Darkbutton = styled.div`
height: 90%;
width: 40%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 10%;
border-radius: 30px;
cursor: pointer;

`



export default Darktoggle;