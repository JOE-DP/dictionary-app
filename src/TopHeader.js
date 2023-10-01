import styled from 'styled-components'
import Darktoggle from './Darktoggle';
import React from 'react';

function TopHeader(props) {
 
  return (
    <Container>
        {/* icon */}
        <div>
            icon
        </div>

        {/* font selector */}
        <div>
        <p style={{fontFamily: 'Open Sans'}} onClick={props.fontSelect}>Open Sans</p>
            {/* font-family: 'Open Sans', sans-serif; */}
        <p style={{fontFamily: 'Raleway'}} onClick={props.fontSelect}>Raleway</p>
            {/* font-family: 'Raleway', sans-serif; */}
        <p style={{fontFamily: 'Ubuntu'}} onClick={props.fontSelect}>Ubuntu</p>
            {/* font-family: 'Ubuntu', sans-serif; */}
        </div>

        {/* darkmode selector */}   
        <Darktoggle toggleState={props.toggleState} colorRange={props.colorRange} darkToggle={props.darkToggle}/>  
    </Container>
  );
}
const Container = styled.div`
display: flex;
justify-content: space-evenly;

`



export default TopHeader;