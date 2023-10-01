import styled from 'styled-components'
import React from 'react';




function Body(props) {
  let dictData = props.dictData
  let defArr = []
  console.log(dictData)
  if(props.dictData){
  console.log(dictData)
  // processing the definitions loop and display
  let loopLen = 0
  let defLen = dictData.meanings[0]['definitions'].length
  defLen > 3 ? loopLen = 3 : loopLen = defLen
  for(let i = 0; i < loopLen; i++){
    defArr.push(i)
  }
}
  if(dictData == false){
    return (
      <p>Search not found, please try to search again in the search bar above</p>
    )} else {
  return (
                
        <Container onClick={props.searchDict}>

        <FieldContainer>
        <span>Search Term:</span><p>{dictData.word}</p>
        </FieldContainer>

        <FieldContainer>
        <span>Phonetic:</span><p>{dictData.phonetic}</p>
        </FieldContainer>
        {/* map =< 3 meanings */}
        {defArr.map((i) => { return (
          <>
           <FieldContainer>
        <span>Part of Speech:</span><p>{dictData.meanings[0]['partOfSpeech']}</p>
        </FieldContainer>

        <FieldContainer>
        <span>Definition:</span><p>{dictData.meanings[0]['definitions'][i]['definition']}</p>
        </FieldContainer>

        <FieldContainer>
        <span>Example of Use:</span><p>{dictData.meanings[0]['definitions'][i]['example']}</p>
        </FieldContainer>
          </>
        )
        })}
      

        </Container>
    
  );
  } 
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