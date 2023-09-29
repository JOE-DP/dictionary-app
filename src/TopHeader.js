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
            font selector/dropdown
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