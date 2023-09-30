import styled from 'styled-components'
import React from 'react';




function Body(props) {
  let dictData = props.dictData
  return (
  
        <Container onClick={props.searchDict}>

        <FieldContainer>
        <span>Search Term:</span><p>{dictData.word}</p>
        </FieldContainer>

        <FieldContainer>
        <span>Part of Speech:</span><p>{dictData.meanings[0]['partOfSpeech']}</p>
        </FieldContainer>

        </Container>
    
  );
}

export default Body;

const Container = styled.div`

`

const FieldContainer = styled.div`
display: flex;
align-items: center;
p{
  padding-left: 5%;
}

`